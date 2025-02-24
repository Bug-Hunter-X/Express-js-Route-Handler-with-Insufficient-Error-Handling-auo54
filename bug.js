const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid user IDs
  db.getUserById(userId, (err, user) => {
    if (err) {
      // No proper error handling here
      res.status(500).send('Internal Server Error');
    } else {
      res.json(user);
    }
  });
});

// ... other routes ...
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});