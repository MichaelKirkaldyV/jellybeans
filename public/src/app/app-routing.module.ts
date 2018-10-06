import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { CreatrestaurantComponent } from './creatrestaurant/creatrestaurant.component';
import { EditrestaurantComponent } from './editrestaurant/editrestaurant.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { CreatereviewComponent } from './createreview/createreview.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [

	{ path: 'restaurants', component: RestaurantsComponent },
	{ path: 'restaurants/new', component: CreatrestaurantComponent },
	{ path: 'restaurants/review/:id', component: CreatereviewComponent },
	{ path: 'restaurants/edit/:id', component: EditrestaurantComponent },
	{ path: 'restaurants/:id', component: ReviewsComponent },
	{ path: '', pathMatch: 'full', redirectTo: '/restaurants' },
	{ path: '**', component: PagenotfoundComponent }
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
