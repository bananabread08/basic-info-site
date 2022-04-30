const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 8080;

// Set static folder
app.use(express.static(path.join(__dirname, 'pages')));

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'contact.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', '404.html'));
});

app.listen(port, () =>
  console.log(`Server started on https://localhost:${port}`)
);
