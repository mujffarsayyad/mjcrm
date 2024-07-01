import { Goal as TGoal } from "../api/goal/Goal";

export const GOAL_TITLE_FIELD = "goalName";

export const GoalTitle = (record: TGoal): string => {
  return record.goalName?.toString() || String(record.id);
};
