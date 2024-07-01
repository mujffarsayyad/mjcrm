import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { OpportunityController } from "../opportunity.controller";
import { OpportunityService } from "../opportunity.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  assignedTo: "exampleAssignedTo",
  closeDate: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  opportunityName: "exampleOpportunityName",
  updatedAt: new Date(),
  value: 42.42,
};
const CREATE_RESULT = {
  assignedTo: "exampleAssignedTo",
  closeDate: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  opportunityName: "exampleOpportunityName",
  updatedAt: new Date(),
  value: 42.42,
};
const FIND_MANY_RESULT = [
  {
    assignedTo: "exampleAssignedTo",
    closeDate: new Date(),
    createdAt: new Date(),
    id: "exampleId",
    opportunityName: "exampleOpportunityName",
    updatedAt: new Date(),
    value: 42.42,
  },
];
const FIND_ONE_RESULT = {
  assignedTo: "exampleAssignedTo",
  closeDate: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  opportunityName: "exampleOpportunityName",
  updatedAt: new Date(),
  value: 42.42,
};

const service = {
  createOpportunity() {
    return CREATE_RESULT;
  },
  opportunities: () => FIND_MANY_RESULT,
  opportunity: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Opportunity", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: OpportunityService,
          useValue: service,
        },
      ],
      controllers: [OpportunityController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /opportunities", async () => {
    await request(app.getHttpServer())
      .post("/opportunities")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        closeDate: CREATE_RESULT.closeDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /opportunities", async () => {
    await request(app.getHttpServer())
      .get("/opportunities")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          closeDate: FIND_MANY_RESULT[0].closeDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /opportunities/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/opportunities"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /opportunities/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/opportunities"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        closeDate: FIND_ONE_RESULT.closeDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /opportunities existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/opportunities")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        closeDate: CREATE_RESULT.closeDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/opportunities")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
