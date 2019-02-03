const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// const logger = function(req, res, next) {
// 	console.log('Logging...');
// 	next();
// };

// app.use(logger);

//View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// Body Parser Middleware
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: false
	})
);

// set static PAth
app.use(express.static(path.join(__dirname, 'public')));

var user = [
	{
		id: 1,
		fName: 'Mufasa',
		lName: 'Lion',
		email: 'Mufasa@gmail.com'
	},
	{
		id: 2,
		fName: 'Simba',
		lName: 'Lion',
		email: 'Simba@gmail.com'
	},
	{
		id: 3,
		fName: 'Sirabi',
		lName: 'Lion',
		email: 'Sirabi@gmail.com'
	}
];

app.get('/', function(req, res) {
	res.render('index', {
		title: 'Customers',
		user: user
	});
});

app.post('/users/add', function(req, res) {
	let newUser = {
		fname: req.body.fName,
		lname: req.body.lName,
		email: req.body.email
	};
	console.log(newUser);
});

app.listen(4000, function() {
	console.log('server started on Port 4000....');
});
