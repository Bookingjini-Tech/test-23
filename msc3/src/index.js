const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/fruits', (req, res) => {
    const fruits = [
        { name: 'Apple', color: 'Red' },
        { name: 'Banana', color: 'Yellow' },
        { name: 'Cherry', color: 'Red' },
        { name: 'Date', color: 'Brown' },
        { name: 'Elderberry', color: 'Black' },
        { name: 'Fig', color: 'Purple' },
        { name: 'Grape', color: 'Green' },
        { name: 'Honeydew', color: 'Green' },
        { name: 'Indian Fig', color: 'Green' },
        { name: 'Jackfruit', color: 'Yellow' }
    ];
    res.json(fruits);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});