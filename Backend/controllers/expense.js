const ExpenseSchema = require("../models/ExpenseModel");

exports.addExpense = async (req, res) => {
  const { title, amount, category, description, date } = req.body; // getting the parameters for the model

  const income = ExpenseSchema({
    title,
    amount,
    category,
    description,
    date,
  });

  try {
    // validations
    if (!title || !amount || !category || !description || !date) {
      return res.status(400).json({ message: "All fields are required!" });
    }
    if (amount <= 0 || !amount === "number") {
      return res
        .status(400)
        .json({ error: "Amount must be a number and more than 0" });
    }
    await income.save();
    res.status(200).json({ message: "Expense Added" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
  console.log(income);
};

exports.getExpense = async (req, res) => {
  try {
    const incomes = await ExpenseSchema.find().sort({ createdAt: -1 }); // sorts and searches the list for the newest item from the top
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.deleteExpense = async (req, res) => {
  const { id } = req.params; // req.params essentially gets the ID
  console.log(req.params);
  ExpenseSchema.findByIdAndDelete(id)
    .then((income) => {
      res.status(200).json({ message: "Expense deleted" });
    })
    .catch((error) => {
      res.status(500).json({ message: "Server Error" });
      console.log(error);
    });
};
