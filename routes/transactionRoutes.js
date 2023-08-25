const express = require("express");
const { addTransaction, getAllTransaction , editTransaction, deleteTransaction} = require("../controllers/transactionCtrl");


//router object
const router = express.Router();

//routes
//add transaction post method
router.post('/add-transaction', addTransaction)

//get transactions
router.post('/get-transaction' , getAllTransaction)

//edit transaction post method
router.post('/edit-transaction', editTransaction)

//delete transactions
router.post('/delete-transaction' , deleteTransaction)

module.exports = router;