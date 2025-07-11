const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

app.listen(PORT, '0.0.0.0', () => console.log(`Backend running on port ${PORT}`));
