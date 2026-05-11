import Loan from "../models/Loan.js";
import User from "../models/User.js";
import Books from "../models/Books.js";

const CreateLoan = async (data) => {
  const { userId, bookId, valorempresimo, status } = data;

  if (!userId || !bookId || !valorempresimo) {
    const error = new Error("userId, bookId e valorEmprestimo são obrigatórios");
    error.statusCode = 400;
    throw error;
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

  if (!book.disponivel) {
    const error = new Error("Este livro não está disponível para empréstimo");
    error.statusCode = 400;
    throw error;
  }

  const loan = await Loan.create({
    userId,
    bookId,
    dateLoan,
    dateScheduledReturn,
    returndate,
    status,
    fine
  });


  book.disponivel = false;
  await book.save();

  return Loan.findById(loan._id).populate("userId").populate("bookId");
};


export default {
  CreateLoan,
  getAllLoans,
  getLoanById,
  updateLoan,
  deleteLoan,
  getLoansByUser,
  getLoansByCar,
  updateLoanStatus,
  getLoansByValueRange,
  getLoansByDate,
  countLoans,
};