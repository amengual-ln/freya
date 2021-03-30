import { combineReducers } from "redux";
import tasks from "./tasks";
import briefcases from "./briefcases";
import projects from "./projects";

export default combineReducers({ tasks, briefcases, projects });
