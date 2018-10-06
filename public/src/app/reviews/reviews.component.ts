import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, RouterOutlet, Router } from '@angular/router';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

	id: any;
	review: any;
  restaurant: object;
  _restaurant: object;

  constructor(private _http: HttpService,
  			  private _router: Router,
  			  private _route: ActivatedRoute) { }

  ngOnInit() {
    this._restaurant = {name: "", cuisine: ""}
  	this.review = {_id: this.id, name: "", star: "", review: "", _restaurant: ""}
  	this._route.params.subscribe(params => {
      console.log("Id passsed through params", params)
      this.id = params['id']
    })
    this.showRestaurant(this.id)
    this.showRestaurant2(this.id)
  }


  showRestaurant(id){
    let observable = this._http.showRestaurantService(this.id)
    observable.subscribe(data => {
      console.log("title", this._restaurant)
      this._restaurant = data;
      
    })
  }

  showRestaurant2(id){
    let observable = this._http.showRestaurantService(this.id)
    observable.subscribe(data => {
      console.log("Here is the restaurant..", data)
      this.restaurant = data;
      console.log(this.restaurant)
    })
  }

}
