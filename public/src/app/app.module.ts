import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { CreatrestaurantComponent } from './creatrestaurant/creatrestaurant.component';
import { EditrestaurantComponent } from './editrestaurant/editrestaurant.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { CreatereviewComponent } from './createreview/createreview.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    CreatrestaurantComponent,
    EditrestaurantComponent,
    ReviewsComponent,
    CreatereviewComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
