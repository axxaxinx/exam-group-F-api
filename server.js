const express = require('express');
const app = express();
const port = 3000;

// Hardcoded list of exams (or users, based on context)
const exams = [
  { id: 1, name: 'Math Exam', date: '2025-04-01' },
  { id: 2, name: 'Science Exam', date: '2025-04-05' },
  { id: 3, name: 'History Exam', date: '2025-04-10' },
];

// Define the GET /exams endpoint
app.get('/exams', (req, res) => {
  res.json(exams);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
