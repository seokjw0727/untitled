const express = require('express');
const app = express();
const path = require('path');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'informaion.html'));
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});