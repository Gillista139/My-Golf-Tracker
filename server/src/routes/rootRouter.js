import express from "express";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import clientRouter from "./clientRouter.js";
import weatherRouter from "./api/weatherRouter.js";
import scoreCardsRouter from "./api/v1/scoreCardsRouter.js";
import coursesRouter from './api/v1/coursesRouter.js'

const rootRouter = new express.Router();

rootRouter.use("/", clientRouter);

rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter);

rootRouter.use("/api/v1/weather", weatherRouter)

rootRouter.use("/api/v1/courses", coursesRouter)
rootRouter.use("/api/v1/scorecards", scoreCardsRouter)

export default rootRouter;
