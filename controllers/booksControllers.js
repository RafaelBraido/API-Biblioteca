import { json } from "express";
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
const getAvailableBooks = async (req, res, next) => {
  try {
    const books = await BookService.getAvailableBooks();
    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};

const getBooksByCategory = async (req, res, next) => {
  try {
    const books = await BookService.getBooksByCategory(req.params.category);
    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};

const PutFindByIdAndUpdate = async (req, res, next) => {
  try {
    const book = await BookService.PutFindByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(book);
  } catch (error) {
    next(error);
  }
};

const patchDesativar = async (req, res, next) => {
  try {
    const book = await BookService.patchDesativar(req.params.id);
    res.json(book);
  } catch (error) {
    next(error);
  }
};
export default {
  createBook,
  BookList,
  BookFindByID,
  getBookByTitle,
  getAvailableBooks,
  getBooksByCategory,
  patchDesativar,
  PutFindByIdAndUpdate,
};
