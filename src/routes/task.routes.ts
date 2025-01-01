import { Router } from "express";
import { createTask, getTasks, updateTaskStatus } from "../controllers/task.controller";

const taskRouter = Router();

taskRouter.get('/', getTasks);
taskRouter.post('/', createTask);
taskRouter.patch('/:taskId/status', updateTaskStatus);

export default taskRouter;