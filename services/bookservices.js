import Books from "../models/books.js";
import Loan from "../models/Loan.js";

const createBook = async (data) => {
  const { Title, AuthorCategory, TotalQuantity, AvailableQuantity, year } = data;

  if (!Title || !AuthorCategory || !TotalQuantity || !AvailableQuantity || !year) {
    const error = new Error("Título, autor, ano, gênero, preco e  são obrigatórios");
    error.statusCode = 400;
    throw error;
  }

  return Books.create({
    Title,
    AuthorCategory,
    TotalQuantity,
    AvailableQuantity,
    year
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

  const book = await Books.find({ title: { $regex: `^${title}$`, $options: "i" }  });

  console.log(book);
  if (!book) {
    const error = new Error("Livro não encontrado");
    error.statusCode = 404;
    throw error;
  }

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
// UserFindByIdAndDelete,
  //   getBooksByBrand,
  //   getAvailableBooks
};