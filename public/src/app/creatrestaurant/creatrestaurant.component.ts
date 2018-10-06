import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, RouterOutlet, Router } from '@angular/router';



@Component({
  selector: 'app-creatrestaurant',
  templateUrl: './creatrestaurant.component.html',
  styleUrls: ['./creatrestaurant.component.css']
})
export class CreatrestaurantComponent implements OnInit {

	restaurant: any;

  constructor(private _http: HttpService,
  			  private _router: Router,
  			  private _route: ActivatedRoute) { }

  ngOnInit() {
  	this.restaurant = {name: "", cuisine: ""}
  }

  addRestaurant(restaurant){
  	let observable = this._http.addRestaurantService(this.restaurant)
  	observable.subscribe(data => {
  		console.log("Restaurant added", data)
  		this.restaurant = data;
  		this._router.navigate(['restaurants'])  		
  	})
  }

}
