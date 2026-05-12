import express from "express";
import LoanController from "../controllers/loanControllers.js";

const router = express.Router();

router.post("/create", LoanController.postCreateLoan);
router.get("/List", LoanController.LoanList);

router.get("/active", LoanController.getActiveLoans);
router.get("/over/overdue", LoanController.Overdue);
//router.get("/car/:carId", LoanController.getLoansByCar);
//router.get("/value/:min/:max", LoanController.getLoansByValueRange);
//router.get("/date/:date", LoanController.getLoansByDate);

router.get("/ID/:id", LoanController.LoanId);
router.get("/User/:userId", LoanController.LoanIdUser);
//router.put("/:id", LoanController.updateLoan);
router.patch("/:id/return", LoanController.patchReturnLoan);
//router.delete("/:id", LoanController.deleteLoan);

export default router;