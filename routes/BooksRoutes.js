import express from "express";
import BookController from "../controllers/booksControllers.js";
import Books from "../models/books.js";

const router = express.Router();

router.post("/create", BookController.createBook);
router.get("/List", BookController.BookList);

// Rotas específicas precisam vir antes de /:id
//router.get("/available/count", BooksController.countAvailableBooks);
//router.get("/available", BooksController.getAvailableBooks);
//router.get("/brand/:brand", BooksController.getBooksByBrand);
//router.get("/price/:min/:max", BooksController.getBooksByPriceRange);
//router.get("/plate/:plate", BooksController.getBooksByPlate);

router.get('/id/:id', BookController.BookFindByID);
router.get("/title/:title", async (req, res, next) => {
  console.log(req.params.title);
  const book = await Books.find({ title: { $regex: `^${req.params.title}$`, $options: "i" } });
  console.log(book);
  next();
})

//router.patch("/:id/availability", BooksController.updateAvailability);
//router.delete("/delete/:id", BookController.UserFindByIdAndDelete);

export default router;