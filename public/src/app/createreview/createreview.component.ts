import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-createreview',
  templateUrl: './createreview.component.html',
  styleUrls: ['./createreview.component.css']
})
export class CreatereviewComponent implements OnInit {

	review: any;
	id: any;
	restaurant: any;

  constructor(private _http: HttpService,
  			  private _router: Router,
  			  private _route: ActivatedRoute) { }

  ngOnInit() {
  	this.restaurant = {name: "", cuisine: ""}
  	this.review = {name: "", stars: "", review: ""}
  	this._route.params.subscribe(params => {
      console.log(params)
      this.id = params['id']
    })
    this.showRestaurant(this.id)
  }

  addReview(id, review){
  	let observable = this._http.addReviewService(this.id, this.review)
  	observable.subscribe(data => {
  		console.log("Review added..")
  		this._router.navigate(['restaurants/'+this.id])  		
  	})
  }

  showRestaurant(id){
  	let observable = this._http.showRestaurantService(this.id)
  	observable.subscribe(data => {
  		console.log("Here is the restaurant", data)
  		this.restaurant = data
  	})
  }

}
