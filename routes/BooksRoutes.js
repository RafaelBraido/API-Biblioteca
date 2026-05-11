import express from "express";
import BookController from "../controllers/booksControllers.js";

const router = express.Router();

router.post("/create", BookController.createBook);
router.get("/List", BookController.BookList);
router.get("/available/true", BookController.getAvailableBooks);
router.get("/category/:category", BookController.getBooksByCategory);
router.get('/id/:id', BookController.BookFindByID);
router.get("/title/:title", BookController.getBookByTitle);
router.patch("/:id/desativar", BookController.patchDesativar);
 router.put("/update/:id", BookController.PutFindByIdAndUpdate);

export default router;