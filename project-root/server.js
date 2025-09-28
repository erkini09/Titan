const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use('/api/product', require('./api/product'));
app.use('/api/review', require('./api/review'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
