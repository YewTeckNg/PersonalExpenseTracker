const IncomeSchema = require("../models/IncomeModel");

exports.addIncome = async (req, res) => {
  const { title, amount, category, description, date } = req.body; // getting the parameters for the model

  const income = IncomeSchema({
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
    res.status(200).json({ message: "Income Added" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
  console.log(income);
};

exports.getIncome = async (req, res) => {
  try {
    const incomes = await IncomeSchema.find().sort({ createdAt: -1 }); // sorts and searches the list for the newest item from the top
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.deleteIncome = async (req, res) => {
  const { id } = req.params; // req.params essentially gets the ID
  console.log(req.params);
  IncomeSchema.findByIdAndDelete(id)
    .then((income) => {
      res.status(200).json({ message: "Income deleted" });
    })
    .catch((error) => {
      res.status(500).json({ message: "Server Error" });
    });
};
