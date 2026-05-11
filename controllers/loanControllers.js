import { json } from "express";
import loanService from "../services/loanservices.js";

const postCreateLoan = async (req, res) => {
  const { userId, bookId, dateLoan, dateScheduledReturn } = req.body;

  if (!userId || !bookId || !dateLoan || !dateScheduledReturn) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" });
    }};

    export default {
  createLoan: postCreateLoan,
    };