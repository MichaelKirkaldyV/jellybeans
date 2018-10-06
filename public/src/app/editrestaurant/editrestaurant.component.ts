import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-editrestaurant',
  templateUrl: './editrestaurant.component.html',
  styleUrls: ['./editrestaurant.component.css']
})
export class EditrestaurantComponent implements OnInit {

	restaurant: any;
	id: any;

  constructor(private _http: HttpService,
  			  private _router: Router,
  			  private _route: ActivatedRoute) { }

  ngOnInit() {
  	this.restaurant = {_id: this.id, name: "", cuisine: ""}
  	this._route.params.subscribe(params => {
      console.log(params)
      this.id = params['id']
    })
  }

  editRestaurant(id, restaurant){
  	console.log("here")
  	let observable = this._http.updateRestaurantService(this.id, this.restaurant)
  	observable.subscribe(data => {
  		console.log("Restaurant changed too..", data)
  		this._router.navigate(['restaurants'])  
  	})
  }

}
