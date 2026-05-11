import express from "express";
import LoanController from "../controllers/LoanController.js";

const router = express.Router();

router.post("/create", LoanController.postCreateLoan);
//router.get("/", LoanController.getAllLoans);

// Rotas específicas precisam vir antes de /:id
//router.get("/count", LoanController.countLoans);
//router.get("/user/:userId", LoanController.getLoansByUser);
//router.get("/car/:carId", LoanController.getLoansByCar);
//router.get("/value/:min/:max", LoanController.getLoansByValueRange);
//router.get("/date/:date", LoanController.getLoansByDate);

//router.get("/:id", LoanController.getLoanById);
//router.put("/:id", LoanController.updateLoan);
//router.patch("/:id/status", LoanController.updateLoanStatus);
//router.delete("/:id", LoanController.deleteLoan);

export default router;