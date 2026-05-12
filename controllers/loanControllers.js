import { json } from "express";
import LoanService from "../services/Loanservices.js";

const postCreateLoan = async (req, res, next) => {
  try {
    const book = await LoanService.postCreateLoan(req.body);
    res.status(201).json(book);

  } catch (error) {
    next(error);
  }
}

const LoanList = async (req, res, next) => {
  try {
    const loans = await LoanService.LoanList();
    res.status(200).json(loans);
  } catch (error) {
    next(error);
  }
};

const LoanId = async (req, res, next) => {
  try {
    const loan = await LoanService.LoanId(req.params.id)
    res.status(200).json(loan);
  } catch (error) {
    next(error);
  }
};

const LoanIdUser = async (req, res, next) => {
  
  try {
    const Loan = await LoanService.LoanIdUser(req.params.userId);
    res.json(Loan);
  } catch (error) {
    next(error);
  }
};

const getActiveLoans = async (req, res, next) => {
  try {
    const activeLoans = await LoanService.getActiveLoans();
    res.status(200).json(activeLoans);
  } catch (error) {
    next(error);
  }
};

const patchReturnLoan = async (req, res, next) => {
  try {
    const updatedLoan = await LoanService.patchReturnLoan(req.params.id);
    res.status(200).json(updatedLoan)
  } catch (error) {
    next(error);
  }
};

const Overdue = async (req, res, next) => {
  try {
    const overdueLoans = await LoanService.Overdue();
    res.status(200).json(overdueLoans);
  } catch (error) {
    next(error);
  }
};

export default {
  postCreateLoan,
  LoanList,
  LoanId,
  LoanIdUser,
  getActiveLoans,
  patchReturnLoan,
  Overdue,  
};