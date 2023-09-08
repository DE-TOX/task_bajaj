const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());

// POST endpoint
// POST endpoint
app.post('/bfhl', (req, res) => {
    // Parse JSON request body
    const { data } = req.body;
 
    const numbers = data.filter((item) => typeof item === 'number' || !isNaN(item));
    const alphabets = data.filter((item) => typeof item === 'string' && item.length === 1 && /^[a-zA-Z]+$/.test(item));
  
    const highestAlphabet = alphabets.reduce((max, char) => {
      return char.toLowerCase() > max.toLowerCase() ? char : max;
    }, 'A'); 
  
    const user_id = 'divyansh_joshi_14012002';
    const college_email = 'dj0681@srmist.edu.in';
    const college_roll_number = 'RA2011003011138';
  
    // Prepare response JSON
    const response = {
      is_success: true,
      user_id,
      email: college_email,
      roll_number: college_roll_number,
      numbers,
      alphabets,
      highest_alphabet: [highestAlphabet],
    };
  
    res.json(response);
  });
  

// GET endpoint
app.get('/bfhl', (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
