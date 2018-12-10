const db = require('./db.js');

module.exports.handleSignup = (email, password) => {
  // Check if the email already exits
  db.saveUser({ email, password });
  // Save the user to the database

  // Send welcome email
}
