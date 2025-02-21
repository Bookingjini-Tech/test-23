const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.get('/dogs', (req, res) => {
    const dogs = [
        { name: 'Bulldog', age: 5 },
        { name: 'Beagle', age: 3 },
        { name: 'Labrador', age: 4 },
        { name: 'Poodle', age: 2 },
        { name: 'Boxer', age: 6 },
        { name: 'Dachshund', age: 4 },
        { name: 'Dalmatian', age: 3 },
        { name: 'Shih Tzu', age: 7 },
        { name: 'Golden Retriever', age: 5 },
        { name: 'Chihuahua', age: 1 }
    ];
    res.json(dogs);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});