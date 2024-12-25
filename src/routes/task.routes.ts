import { Router } from "express";
import { createProject, getProjects } from "../controllers/project.controller";
import { createTask, getTasks } from "../controllers/task.controller";

const taskRouter = Router();

taskRouter.get('/', getTasks);
taskRouter.post('/', createTask);

export default taskRouter;