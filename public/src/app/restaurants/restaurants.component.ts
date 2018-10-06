import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';



@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

	restaurants: object;

  constructor(private _http: HttpService) { }

  ngOnInit() {
  	//this.restaurants = []
  	this.showAllRestaurants()
  }

  showAllRestaurants(){
  	let observable = this._http.getAllRestaurantsService()
  	observable.subscribe(data => {
  		this.restaurants = data;
      console.log(this.restaurants)
  	})
  }

  removeRestaurant(id){
  	let observable = this._http.removeRestaurantService(id)
  	observable.subscribe(data => {
  		console.log("Restaurant successfully deleted", data)
  		this.showAllRestaurants()
  	})
  }

}
