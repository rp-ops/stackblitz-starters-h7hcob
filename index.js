const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/check-number', (req, res) => {
  let number = req.query.number;
  if (number >= 0) {
    res.send('The number is Positive');
  } else {
    res.send('The number is Negative');
  }
});

app.get('/check-numberalt', (req, res) => {
  let number = req.query.number;
  let result;
  if (number >= 0) {
    result = 'positive';
  } else {
    result = 'negative';
  }

  res.send('Number is' + result);
});

app.get('/check-even-odd', (req, res) => {
  let number = req.query.number;
  let result;
  if (number / 2 == 0) {
    result = 'even';
  } else {
    result = 'odd';
  }

  res.send('Number is ' + result);
});

app.get('/check-login', (req, res) => {
  let isLoggedIn = req.query.isLoggedIn === 'true';
  let result;
  if (isLoggedIn) {
    result = 'User is Logged In';
  } else {
    result = 'User is not Logged In';
  }

  res.send(result);
});

app.get('/check-discount', (req, res) => {
  let age = parseFloat(req.query.age);
  let result;
  if (age > 65) {
    result = 'User is eligible for a discount';
  } else {
    result = 'User is not eligible for a discount';
  }

  res.send(result);
});

app.get('/check-number-type', (req, res) => {
  let number = parseFloat(req.query.number);
  let result;
  if (number > 0) {
    result = 'Number is Positive';
  } else if (number < 0) {
    result = 'Number is Negative';
  } else {
    result = 'Number is Zero';
  }

  res.send(result);
});

app.get('/check-activity-level', (req, res) => {
  let noOfSteps = parseFloat(req.query.steps);
  let result;
  if (noOfSteps < 5000) {
    result = 'low';
  } else if (noOfSteps < 10000) {
    result = 'moderate';
  } else {
    result = 'high';
  }

  res.send('Activity level is ' + result);
});

app.get('/check-engagement', (req, res) => {
  let likes = parseFloat(req.query.likes);
  let result;
  if (likes < 100) {
    result = 'low';
  } else if (likes < 500) {
    result = 'medium';
  } else {
    result = 'high';
  }

  res.send('Engagement level is ' + result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
