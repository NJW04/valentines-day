const express = require('express');
const path = require('path');
const app = express();
const PORT = 3005;

// Serve static files (like your gif)
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html when accessing the root of your website
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
