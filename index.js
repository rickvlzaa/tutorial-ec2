const express = require('express');
const app = express();

app.get('/', (res, req) => {
 res.send('Hey');
});

app.listen(3000, () => {console.log('Server running on port 3000')});