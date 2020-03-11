const express = require('express');
var app = express();
//
const time = new Date();
const currentTime = time.getHours();
app.use(express.static(__dirname + '/public'));

app.get('/home', (req, res) => {
	if (currentTime <= 8 || currentTime >= 17) res.sendFile(__dirname + '/public/oooops.html');
	else res.sendFile(__dirname + '/public/home.html');
});
app.get('/contact', (req, res) => {
	res.sendFile(__dirname + '/public/contact.html');
});
app.get('/service', (req, res) => {
	res.sendFile(__dirname + '/public/service.html');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, err => (err ? console.error(err) : console.log(`server is running on port ${PORT}`)));
