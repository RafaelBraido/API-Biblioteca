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
    const loan = await LoanService.LoanIdUser(req.params.id)
    res.status(200).json(loan);
  } catch (error) {
    next(error);
  }

  const user = await User.findById(userId);

  if (!user) {
    const error = new Error("Usuário não encontrado");
    error.statusCode = 404;
    throw error;
  }

  const book = await Books.findById(bookId);

  if (!book) {
    const error = new Error("Livro não encontrado");
    error.statusCode = 404;
    throw error;
  }
};


export default {
  postCreateLoan,
  LoanList,
  LoanId,
  LoanIdUser,
};