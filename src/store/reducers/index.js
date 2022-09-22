import { combineReducers } from "redux";
import resources from "./resources";
import briefcases from "./briefcases";
import projects from "./projects";
import tasks from "./tasks";
import docs from "./docs";
import links from "./links";

export default combineReducers({ resources, docs, tasks, briefcases, projects, links });
