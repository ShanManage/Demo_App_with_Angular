import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { OffersComponent } from './offers/offers.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { FoodBeverageComponent } from './food-beverage/food-beverage.component';

const routes: Routes = [
  { path : 'food-beverage' , component : FoodBeverageComponent },
  { path : 'accomodation' , component : AccomodationComponent },
  { path : 'celebrations' , component : CelebrationsComponent },
  { path : 'lifestyle' , component : LifestyleComponent },
  { path : 'weddings' , component : WeddingsComponent },
  { path : 'offers' , component : OffersComponent },
  { path : 'signin' , component : SigninComponent },
  { path : 'signup' , component : SignupComponent },
  { path : '' , component : HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
