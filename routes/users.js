const express = require('express');
const router = express.Router();
const Event = require('../models/index').event;

// INDEX
router.get('/', function (req, res) {
	Event.findAll()
		.then(function (events) {
			res.send(events);
		});
});

// CREATE
router.post('/', function (req, res) {
	Event.create(req.body)
		.then(function (event) {
			res.send(event);
		});
});

// DELETE
router.delete('/:id', function(req, res) {
	Event.findById(req.params.id)
		.then(function(event) {
			event.destroy();
			res.send(`Event ${req.params.id} has been removed`);
		});
})

module.exports = router;