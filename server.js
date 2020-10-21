const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
  const customers = [
    { id: 0, firstName: 'Severus', lastName: 'Snape' },
    { id: 1, firstName: 'Harry', lastName: 'Potter' },
    { id: 2, firstName: 'Albus', lastName: 'Dumbledore' },
  ];

  res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
