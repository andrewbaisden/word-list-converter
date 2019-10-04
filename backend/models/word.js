const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'words.json');

const getWordsFromFile = cb => {
	fs.readFile(p, (err, fileContent) => {
		if (err) {
			cb([]);
		} else {
			cb(JSON.parse(fileContent));
		}
	});
};

exports.findById = (id, cb) => {
	getWordsFromFile(words => {
		const word = words.find(p => p.id === id);

		cb(word);
	});
};
