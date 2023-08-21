import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {ContactComponent} from "./contact/contact.component";
import {ErrorComponent} from "./error/error.component";
import {PolicyComponent} from "./policy/policy.component";
import {StoryComponent} from "./story/story.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ResetpasswordComponent} from "./resetpassword/resetpassword.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Shoppe: Jewelry Shop'
  },
  // {
  //   path: 'shop',
  //   component: ShopComponent,
  //   title: 'Shoppe: Time to Shop'
  // },
  // {
  //   path: 'shop/:string',
  //   component: ShopComponent,
  //   title: 'Shoppe: Time to Shop'
  // },
  {
    path: 'about-us',
    component: StoryComponent,
    title: 'Shoppe: About Us'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Shoppe: Login'
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Shoppe: Register'
  },
  {
    path: 'reset-password',
    component: ResetpasswordComponent,
    title: 'Shoppe: Reset Password'
  },
  // {
  //   path: 'product/:string',
  //   component: ProductComponent,
  //   title: 'Shoppe: Time to Shop'
  // },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Shoppe: Contact Us'
  },
  {
    path: 'policy',
    component: PolicyComponent,
    title: 'Shoppe: Privacy and Policy'
  },
  {
    path: '**',
    component: ErrorComponent,
    title: 'Shoppe: 404 Not Found'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
