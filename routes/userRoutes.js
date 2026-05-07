import express from "express";
import usersController from "../controllers/UserControllers.js";

const router = express.Router();

    router.post("/", usersController.createUser);
    router.get("/List", usersController.userList);
    router.get("/Id/:id", usersController.userFindById); 
    router.put("/update/:id", usersController.userFindByIdAndUpdate);
    router.delete("/delete/:id", usersController.UserFindByIdAndDelete);
                        export default router;