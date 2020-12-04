
const express = require('express');
const router = express.Router();
const login = require('../models/login');
const path = require("path");

const MongoClient = require('mongodb').MongoClient;
const url = process.env.DB_URL;
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  client.close();
});


router.post('/formresult', async (req, reso)=> {
	console.log(req.body);
	const post = new login({
		password: req.body.password,
		email: req.body.email
	});
	console.log(post);
	MongoClient.connect(url, function(err, db) {
		if(err) throw err;
		var dbo = db.db("SampleDB1");
		var query = {email: post.email, password: post.password};
		dbo.collection("signups").find(query).toArray(function(err, res) {
			if(err) throw err;
			console.log(res);
			if(res.length > 0 ) {
				reso.send('WELCOME BACK');
			}
			else {
				reso.send('SIGN UP');
			}
			db.close();
		});
	});

});
module.exports = router;
