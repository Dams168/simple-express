const express = require('express');
const app = express();
const productRoute = require('./routes/productRoute');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World From Express!');
})

app.use(productRoute);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


