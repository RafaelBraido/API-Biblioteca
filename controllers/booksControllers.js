import BookService from "../services/bookservices.js";


const createBook = async (req, res, next) => {
  try {
    const book = await BookService.createBook(req.body);
    res.status(201).json(book);
  } catch (error) {
    next(error);
  }
};

const BookList = async (req, res, next) => {
  try {
    const books = await BookService.BookList();
    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};

const BookFindByID = async (req, res, next) => {
  try {
    const book = await BookService.BookFindByID(req.params.id);
    res.status(200).json(book);
  } catch (error) {
    next(error);
  }
};
const getBookByTitle = async (req, res, next) => {
  try {
    console.log(req.params.title);
    const book = await BookService.getBookByTitle(req.params.title);
    res.status(200).json(book);
  } catch (error) {
    next(error);
  }
};


export default {
  createBook,
    BookList,
      BookFindByID,
        getBookByTitle,
          
};


  