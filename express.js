// npm i express

const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send(`<p>Hello <b>HTML</b> page showing on port ${port}.</p>`);
});

app.listen(port, () => {
	console.log(`Express app is now listening at: http://localhost:${port}`);
});


