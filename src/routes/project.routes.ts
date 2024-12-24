import { Router } from "express";
import { createProject, getProjects } from "../controllers/project.controller";

const projectRouter = Router();

projectRouter.get('/', getProjects);
projectRouter.post('/', createProject);

export default projectRouter;