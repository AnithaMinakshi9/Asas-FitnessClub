const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const path = require('path');


//Middlewares
app.use(express.urlencoded({ extended: false })); 
app.use(express.json());
app.use(cors());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))



const signupRoute = require('./routes/signup');
const loginRoute = require('./routes/login');
const messageRoute = require('./routes/message');
const scheduleRoute = require('./routes/schedule');

app.use('/signup', signupRoute);
app.use('/login', loginRoute);
app.use('/message', messageRoute);
app.use('/schedule', scheduleRoute);

//Database
mongoose.connect(
	process.env.DB_URL,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => {
		console.log("!!Connected to SampleDB1!!");
	}
);


//Routes


app.get("/signup", (req, res) => {
	res.render("signupform");
});

app.get("/login", (req, res) => {
	res.render("loginform");
});

app.get("/schedule", (req, res) => {
	res.render("scheduleform");
});

app.get("/message", (req, res) => {
	res.render("messageform");
});

app.get("/", (req, res) => {
	res.send("This is Home");
});

app.listen(process.env.PORT || 3000);
