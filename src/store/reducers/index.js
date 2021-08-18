import { combineReducers } from "redux";
import briefcases from "./briefcases";
import projects from "./projects";
import tasks from "./tasks";
import docs from "./docs";
import links from "./links";

export default combineReducers({ docs, tasks, briefcases, projects, links });
