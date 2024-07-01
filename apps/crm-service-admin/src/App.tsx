import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TicketList } from "./ticket/TicketList";
import { TicketCreate } from "./ticket/TicketCreate";
import { TicketEdit } from "./ticket/TicketEdit";
import { TicketShow } from "./ticket/TicketShow";
import { SaleList } from "./sale/SaleList";
import { SaleCreate } from "./sale/SaleCreate";
import { SaleEdit } from "./sale/SaleEdit";
import { SaleShow } from "./sale/SaleShow";
import { SupportList } from "./support/SupportList";
import { SupportCreate } from "./support/SupportCreate";
import { SupportEdit } from "./support/SupportEdit";
import { SupportShow } from "./support/SupportShow";
import { OpportunityList } from "./opportunity/OpportunityList";
import { OpportunityCreate } from "./opportunity/OpportunityCreate";
import { OpportunityEdit } from "./opportunity/OpportunityEdit";
import { OpportunityShow } from "./opportunity/OpportunityShow";
import { DocumentationList } from "./documentation/DocumentationList";
import { DocumentationCreate } from "./documentation/DocumentationCreate";
import { DocumentationEdit } from "./documentation/DocumentationEdit";
import { DocumentationShow } from "./documentation/DocumentationShow";
import { CustomerCareList } from "./customerCare/CustomerCareList";
import { CustomerCareCreate } from "./customerCare/CustomerCareCreate";
import { CustomerCareEdit } from "./customerCare/CustomerCareEdit";
import { CustomerCareShow } from "./customerCare/CustomerCareShow";
import { PaymentGatewayList } from "./paymentGateway/PaymentGatewayList";
import { PaymentGatewayCreate } from "./paymentGateway/PaymentGatewayCreate";
import { PaymentGatewayEdit } from "./paymentGateway/PaymentGatewayEdit";
import { PaymentGatewayShow } from "./paymentGateway/PaymentGatewayShow";
import { AnalysisList } from "./analysis/AnalysisList";
import { AnalysisCreate } from "./analysis/AnalysisCreate";
import { AnalysisEdit } from "./analysis/AnalysisEdit";
import { AnalysisShow } from "./analysis/AnalysisShow";
import { PrList } from "./pr/PrList";
import { PrCreate } from "./pr/PrCreate";
import { PrEdit } from "./pr/PrEdit";
import { PrShow } from "./pr/PrShow";
import { GoalList } from "./goal/GoalList";
import { GoalCreate } from "./goal/GoalCreate";
import { GoalEdit } from "./goal/GoalEdit";
import { GoalShow } from "./goal/GoalShow";
import { SubscriptionList } from "./subscription/SubscriptionList";
import { SubscriptionCreate } from "./subscription/SubscriptionCreate";
import { SubscriptionEdit } from "./subscription/SubscriptionEdit";
import { SubscriptionShow } from "./subscription/SubscriptionShow";
import { LeadList } from "./lead/LeadList";
import { LeadCreate } from "./lead/LeadCreate";
import { LeadEdit } from "./lead/LeadEdit";
import { LeadShow } from "./lead/LeadShow";
import { CommunicationList } from "./communication/CommunicationList";
import { CommunicationCreate } from "./communication/CommunicationCreate";
import { CommunicationEdit } from "./communication/CommunicationEdit";
import { CommunicationShow } from "./communication/CommunicationShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CRMService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Ticket"
          list={TicketList}
          edit={TicketEdit}
          create={TicketCreate}
          show={TicketShow}
        />
        <Resource
          name="Sale"
          list={SaleList}
          edit={SaleEdit}
          create={SaleCreate}
          show={SaleShow}
        />
        <Resource
          name="Support"
          list={SupportList}
          edit={SupportEdit}
          create={SupportCreate}
          show={SupportShow}
        />
        <Resource
          name="Opportunity"
          list={OpportunityList}
          edit={OpportunityEdit}
          create={OpportunityCreate}
          show={OpportunityShow}
        />
        <Resource
          name="Documentation"
          list={DocumentationList}
          edit={DocumentationEdit}
          create={DocumentationCreate}
          show={DocumentationShow}
        />
        <Resource
          name="CustomerCare"
          list={CustomerCareList}
          edit={CustomerCareEdit}
          create={CustomerCareCreate}
          show={CustomerCareShow}
        />
        <Resource
          name="PaymentGateway"
          list={PaymentGatewayList}
          edit={PaymentGatewayEdit}
          create={PaymentGatewayCreate}
          show={PaymentGatewayShow}
        />
        <Resource
          name="Analysis"
          list={AnalysisList}
          edit={AnalysisEdit}
          create={AnalysisCreate}
          show={AnalysisShow}
        />
        <Resource
          name="Pr"
          list={PrList}
          edit={PrEdit}
          create={PrCreate}
          show={PrShow}
        />
        <Resource
          name="Goal"
          list={GoalList}
          edit={GoalEdit}
          create={GoalCreate}
          show={GoalShow}
        />
        <Resource
          name="Subscription"
          list={SubscriptionList}
          edit={SubscriptionEdit}
          create={SubscriptionCreate}
          show={SubscriptionShow}
        />
        <Resource
          name="Lead"
          list={LeadList}
          edit={LeadEdit}
          create={LeadCreate}
          show={LeadShow}
        />
        <Resource
          name="Communication"
          list={CommunicationList}
          edit={CommunicationEdit}
          create={CommunicationCreate}
          show={CommunicationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
