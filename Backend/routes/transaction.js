const {
  addExpense,
  getExpense,
  deleteExpense,
} = require("../controllers/expense");
const { addIncome, getIncome, deleteIncome } = require("../controllers/income");

const router = require("express").Router();

router.post("/add-income", addIncome); // endpoint for posting
router.get("/get-income", getIncome); // endpoint for getting
router.delete("/delete-income/:id", deleteIncome); // endpoint for deleting

router.post("/add-expense", addExpense);
router.get("/get-expense", getExpense);
router.delete("/delete-expense/:id", deleteExpense);

module.exports = router;
