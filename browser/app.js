const express = require('express');
const app = express();
const port = 3333;

app.use(express.static(__dirname + '/'));
app.listen(port, () => console.log(`Zbox app is running on http://localhost:${port}`));
