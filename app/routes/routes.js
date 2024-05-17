import express from "express";
import cors from "cors";

import { defaultCors } from "../middlewares/corsConfigs.js";
import { validateFields } from "../middlewares/middlewares.js";
import { createUser } from "../controllers/controller.js";

const router = express.Router()


//routes
router.get("/users", cors(defaultCors))
router.get("/users/accounts", cors(defaultCors))
router.get("/users/accounts/transfers", cors(defaultCors))
router.get("/users/all/:id", cors(defaultCors))

router.post("/create/user/account", cors(defaultCors), validateFields, createUser)

router.put("/update/user/:id", cors(defaultCors))

router.delete("/status/change/:id", cors(defaultCors))


export default router;