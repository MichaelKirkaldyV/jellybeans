var mongoose = require('mongoose');

//Sets database
var RestaurantSchema = new mongoose.Schema({
  name: {type: String, required: [true, "Name is needed"], minlength: [3, "Name must be at least 3 characters"], maxlength: 50},
  cuisine: {type: String, required: [true, "Cuisine is needed"], minlength: [3, "Cuisine must be at least 3 characters"], maxlength: 50},
  _reviews: [{type: mongoose.Schema.Types.Mixed, ref: 'Review'}]
}, {timestamps: true});

var ReviewSchema = new mongoose.Schema({
	name: {type: String, required: [true, "Name is needed"], minlength: [3, "Name must be at least 3 characters"], maxlength: 50},
	stars: {type: Number, required: false, minlength: 1, maxlength: 5},
	review: {type: String, required: [true, "Review is needed"], minlength: [3, "Review must be at least 3 characters"], maxlength: 50},
	_restaurant: {type: mongoose.Schema.Types.Mixed, ref: 'Restaurant'},
}, {timestamps:true});

//Get database
mongoose.model('Restaurant', RestaurantSchema); // We are setting these Schema in our Models.
mongoose.model('Review', ReviewSchema)