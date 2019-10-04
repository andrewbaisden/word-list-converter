const Word = require('../models/word');

exports.getWord = (req, res, next) => {
	const woId = req.params.wordId;
	Word.findById(woId, word => {
		if (word) {
			console.log(word);
			res.json(word);
		} else if (!word) {
			console.log('No ID found, redirecting back to words page');
			// res.redirect('/words');
		}
	});
};
