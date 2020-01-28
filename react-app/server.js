const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
	res.send({ express: 'World'});
});

app.post('/api/world', (req, res) => {
	console.log(req.body);
	res.send('post test successful: ' + req.body.post);
});

if(process.env.NODE_ENV === 'production'){
	app.use(express.static(path.join(__dirname, 'client/build')));

	app.get('*', function(req, res) {
		res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
	});
}

app.listen(port, () => console.log(`listening on port ${port}`));