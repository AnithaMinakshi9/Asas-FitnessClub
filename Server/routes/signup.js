
const express = require('express');
const router = express.Router();
const signup = require('../models/signup');
const path = require("path");


router.post('/formresult', async (req, res)=> {
	console.log(req.body);
	const post = new signup({
		username: req.body.username,
		password: req.body.password,
		email: req.body.email
	});
	console.log(post);
	try {
		const SavedPost = await post.save()
		res.json(SavedPost);
	} catch (err) {
		res.json({message: err});
	}
});


module.exports = router;
