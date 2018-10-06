var mongoose = require('mongoose');
var apiController = require('./../controllers/restaurants.js')

module.exports = function(app){

	app.get('/api/showAll', apiController.showAll),
	
	console.log("Im in the server routes")
	app.post('/api/addRestaurant', apiController.addRestaurant),

	app.delete('/api/removeRestaurant/:id', apiController.removeRestaurant),

	//Retrieve a Task by ID
	app.put('/api/updateRestaurant/:id', apiController.updateRestaurant),

	app.post('/api/addReview/:id', apiController.addReview),

	app.get('/api/showRestaurant/:id', apiController.showRestaurant)


};