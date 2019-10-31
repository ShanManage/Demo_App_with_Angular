import { WeddingsComponent } from './weddings/weddings.component';
import { OffersComponent } from './offers/offers.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { FoodBeverageComponent } from './food-beverage/food-beverage.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path : 'accomodation' , component : AccomodationComponent },
  { path : 'celebrations' , component : CelebrationsComponent },
  { path : 'food-beverage' , component : FoodBeverageComponent },
  { path : 'lifestyle' , component : LifestyleComponent },
  { path : 'offers' , component : OffersComponent },
  { path : 'weddings' , component : WeddingsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
