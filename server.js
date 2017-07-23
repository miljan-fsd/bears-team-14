const express = require('express');
const app = express();

app.get('/api/test/', (req, res) => {
  res.json({
    data: 'Test data',
  });
});

app.listen(3001);
