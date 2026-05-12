import Books from "../models/books.js";
import Loan from "../models/Loan.js";

const createBook = async (data) => {
  const { Title, AuthorCategory, TotalQuantity, AvailableQuantity, year, active } = data;

  // if (!Title || !AuthorCategory || !TotalQuantity || !AvailableQuantity || !year ||  active !== "boolean") {
  //   const error = new Error("Título, autor, ano, gênero, preco e status são obrigatórios");
  //   error.statusCode = 400;
  //   throw error;
  // }

  return Books.create({
    Title,
    AuthorCategory,
    TotalQuantity,
    AvailableQuantity,
    year,
    active,
  });
};

const BookList = async () => {
  return Books.find();
};

const BookFindByID = async (id) => {
  const book = await Books.findById(id);

  if (!book) {
    const error = new Error("Livro não encontrado");
    error.statusCode = 404;
    throw error;
  }
  return book;
};

const getBookByTitle = async (title) => {
  if (!title) {
    const error = new Error("O título deve ser fornecido");
    error.statusCode = 400;
    throw error;
  }

  const book = await Books.find({ Title: { $regex: `^${title}$`, $options: "i" }  });

  console.log(book);
  if (!book) {
    const error = new Error("Livro não encontrado");
    error.statusCode = 404;
    throw error;
  }

  return book;
};

const getAvailableBooks = async () => {
  return Books.find({ AvailableQuantity: { $gt: 0 } });
};

const getBooksByCategory = async (category) => {
  if (!category) {
    const error = new Error("O gênero deve ser fornecido");
    error.statusCode = 400;
    throw error;
  }

  return Books.find({ AuthorCategory: { $regex: `^${category}$`, $options: "i" } });
};

const PutFindByIdAndUpdate = async (id, data) => {
  const book = await Books.findByIdAndUpdate(id, data, { new: true });

  if (!book) {
    const error = new Error("Livro não encontrado");
    error.statusCode = 404;
    throw error;
  }

  return book;
};

const patchDesativar = async (id) => {
  const book = await Books.findById(id);

  if (!book) {
    const error = new Error("Livro não encontrado");
    error.statusCode = 404;
    throw error;
  }

  book.active = false;
  await book.save();

  return book;
};

 
//
// const getBooksByBrand = async (brand) => {
//   return Books.find({ marca: { $regex: `^${brand}$`, $options: "i" } });
// };
//
// const getAvailableBooks = async () => {
//       return Books.find({ disponivel: true });
// };
export default {
  createBook,
  BookList,
  BookFindByID,
  getBookByTitle,
  getAvailableBooks,
  getBooksByCategory,
  PutFindByIdAndUpdate,
  patchDesativar,

};