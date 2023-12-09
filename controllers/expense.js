const Expense = require('../models/expense');

exports.postAddExpense = async (req, res, next) => {
    try {
        console.log(req.body);
        const body = req.body;
        const amount = body.expense;
        const description = body.exp_desc;
        const expType = body.exp_type;

        const expense = new Expense(null, amount, description, expType);

        const data = await Expense.create({
            amount: amount,
            description: description,
            expType: expType
        });

        res.status(201).json({newExpDetail: data});
    } catch (err) {
        console.log(err);
    }
};

exports.getExpenses = async (req, res, next) => {
    try{
        const data = await Expense.findAll();
        res.status(201).json({allExpDetails: data});
    } catch (err) {
        console.log(err);
    }
};

exports.postDeleteExpense = async (req, res, next) => {
    try{
        // console.log(req.params.expId);
        let expense = await Expense.findByPk(req.params.expId);
        console.log(expense);
        res.status(201).json({deletedExp: expense});
        return expense.destroy();
    } catch (err) {
        console.log(err);
    }
};