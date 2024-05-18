const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create transaction schema
const TransactionSchema = new Schema({
  date: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true
  }
});

// Create and export Transaction model
module.exports = Transaction = mongoose.model('transaction', TransactionSchema);
