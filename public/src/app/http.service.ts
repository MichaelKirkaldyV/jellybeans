import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  addRestaurantService(restaurant){
  	return this._http.post('/api/addRestaurant', restaurant)
  }

  getAllRestaurantsService(){
  	return this._http.get('/api/showAll')
  }

  removeRestaurantService(id){
  	return this._http.delete('/api/removeRestaurant/'+id)
  }

  updateRestaurantService(id, restaurant){
  	console.log("In service")
    return this._http.put('/api/updateRestaurant/'+id, restaurant)
  }

  addReviewService(id, review){
    return this._http.post('/api/addReview/'+id, review)
  }

  showRestaurantService(id){
    return this._http.get('/api/showRestaurant/'+id)
  }

}//End of exports
