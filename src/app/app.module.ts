import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {ContactComponent} from "./contact/contact.component";
import {ErrorComponent} from "./error/error.component";
import { HomeComponent } from './home/home.component';
import {FooterComponent} from "./footer/footer.component";
import {StoryComponent} from "./story/story.component";
import {PolicyComponent} from "./policy/policy.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    ErrorComponent,
    HomeComponent,
    StoryComponent,
    PolicyComponent,
    LoginComponent,
    RegisterComponent,
    ResetpasswordComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
