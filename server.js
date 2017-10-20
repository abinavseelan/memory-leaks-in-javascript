const express = require('express');
const path = require('path');
const port = 1337;
const app = express();

app.use('/', express.static(path.resolve(__dirname, 'client')));


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});