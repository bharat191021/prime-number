const express = require('express');
const app = express();

app.get('/isprime', (req, res) => {
  const num = parseInt(req.query.number);
  if (isNaN(num)) {
    res.status(400).send('Invalid number parameter');
    return;
  }
  if (num < 2) {
    res.send(false);
    return;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      res.send(false);
      return;
    }
  }
  res.send(true);
});

app.listen(3000, () => console.log('prime number'));

