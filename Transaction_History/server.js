const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Initialize Express app
const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MongoDB configuration
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Transaction model
const Transaction = require('./models/Transaction');

// Routes
// POST route to store transaction
app.post('/api/transactions', (req, res) => {
  const { date, description, amount, status } = req.body;

  // Create new transaction instance
  const newTransaction = new Transaction({
    date,
    description,
    amount,
    status
  });

  // Save transaction to database
  newTransaction
    .save()
    .then(transaction => res.json(transaction))
    .catch(err => console.log(err));
});

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
