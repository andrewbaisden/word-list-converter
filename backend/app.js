const express = require('express');

const app = express();

const phoneController = require('./controllers/phone');

app.get('/', (req, res) => res.send('Home Route'));

app.get('/words', (req, res, next) => {
	const data = require('./data/words.json');
	res.json(data);
});

app.get('/words/:wordId', phoneController.getWord);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}, http://localhost:${port}`));
