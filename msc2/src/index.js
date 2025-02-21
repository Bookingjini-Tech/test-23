const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/cats', (req, res) => {
    const cats = [
        { name: 'Persian', age: 5 },
        { name: 'Siamese', age: 3 },
        { name: 'Maine Coon', age: 4 },
        { name: 'Ragdoll', age: 2 },
        { name: 'Bengal', age: 6 },
        { name: 'Sphynx', age: 4 },
        { name: 'British Shorthair', age: 3 },
        { name: 'Scottish Fold', age: 7 },
        { name: 'Abyssinian', age: 5 },
        { name: 'Birman', age: 1 }
    ];
    res.json(cats);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});