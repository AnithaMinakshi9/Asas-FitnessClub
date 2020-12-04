
const express = require('express');
const router = express.Router();
const schedule = require('../models/schedule');
const path = require("path");


router.post('/formresult', async (req, res)=> {
	console.log(req.body);
	const post = new schedule({
		date: req.body.date,
		time: req.body.time,
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
