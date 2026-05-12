import User from "../models/User.js";
import Books from "../models/books.js"
import Loan from "../models/Loan.js";

const postCreateLoan = async (data) => {
  const { userId, bookId, dateLoan, dateScheduledReturn, returndate, status, fine } = data;

  if (!userId || !bookId || !dateLoan || !dateScheduledReturn || !status) {
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

  if (book.AvailableQuantity <= 0) {
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


  book.AvailableQuantity -= 1;
  await book.save();

  return loan;
};

const LoanList = async () => {
  return Loan.find();
};

const LoanId = async (id) => {
  const book = await Books.findById(id);

  if (!book) {
    const error = new Error("Livro não encontrado");
    error.statusCode = 404;
    throw error;

  }
  return book;
};

const LoanIdUser = async (userId) => {
  console.log(userId)
  return Loan.find({ userId: userId })
};

const getActiveLoans = async () => {
  return Loan.find({ status: "Active" });
}

const patchReturnLoan = async (id) => {
  const loan = await Loan.findById(id);

  if (!loan) {
    const error = new Error("Empréstimo não encontrado");
    error.statusCode = 404;
    throw error;
  }

  if (loan.status === "Returned") {
    const error = new Error("Este empréstimo já foi retornado");
    error.statusCode = 400;
    throw error;
  }

  loan.status = "Returned";
  loan.returndate = Date.now();
  await loan.save();

  const book = await Books.findById(loan.bookId);
  book.AvailableQuantity += 1;
  await book.save();

  return loan;

}

const Overdue = async () => {
  const now = new Date();
  return Loan.find({ status: "Active", dateScheduledReturn: { $lt: now } });
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