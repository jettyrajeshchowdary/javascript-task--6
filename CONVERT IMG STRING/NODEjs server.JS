const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
    
app.use(express.static(path.join(__dirname, 'public')));

app.get('/convertImageToString', (req, res) => {
  const imagePath = path.join(__dirname, 'public', 'product-image.jpg');
  const imageBuffer = fs.readFileSync(imagePath);
  const base64String = imageBuffer.toString('base64');
  res.send(base64String);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
