
const express = require('express');
const router = express.Router();
const messageInfo = require('../models/message');
const path = require("path");


router.post('/formresult', async (req, res) => {
	console.log(req.body);
	const post = new messageInfo({
		message: req.body.message,
		email: req.body.email,
		name: req.body.name
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
