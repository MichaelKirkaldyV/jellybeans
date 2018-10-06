var mongoose = require('mongoose');
var Restaurant = mongoose.model('Restaurant')
var Review = mongoose.model('Review')

module.exports = {

    showAll: function(req, res) {
    	Restaurant.find({}, function(err, data){
        if(err){
           console.log("Returned error", err);
           res.json(err)
        }
        else {
           res.json(data)
        }
     })
    },
    addRestaurant: function(req, res) {
     console.log("In controller, adding Restaurant..", req.body);
	 var restaurant = new Restaurant({name: req.body.name, cuisine: req.body.cuisine});
	 restaurant.save(function(err, data){
            if (err) {
                res.json(err);
            } else {
                res.json(data);
            }
        });
    },
   removeRestaurant: function(req, res) {
        Restaurant.remove({_id: req.params.id }, function(err, data) {
            if (err) {
                res.json(err)
            } else {
                res.json(data);
            }
        });
    },
    updateRestaurant: function(req, res) {
    	 Restaurant.findByIdAndUpdate({_id: req.params.id }, {$set: {name: req.body.name, cuisine: req.body.cuisine}}, { new: true }, function(err, data) {
            if (err) {
                res.json(err);
            } else {
                console.log(data)
                res.json(data);
            }
        })
    },
    addReview: function(req, res) {
        var review = new Review({name: req.body.name, stars: req.body.stars, review: req.body.review})
        review.save(function(err, data) {
            if (err){
                res.json(err)
            } else {
                Restaurant.findByIdAndUpdate({_id: req.params.id}, {$push: {_reviews: data}}, function(err, data){
                    if (err){
                        res.json(err)
                    } else {
                        res.json(data)
                    }
                })
            }
        })
    },
    showRestaurant: function(req, res) {
        Restaurant.findOne({_id: req.params.id}, function(err, data){
            if (err){
                res.json(err)
            } else {
                console.log("restaurant found", data)
                res.json(data)
            }
        })
    }
    
};//End of exports