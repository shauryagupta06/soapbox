import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import * as firebase from 'firebase/app';
import 'firebase/auth';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth.service';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { ProfileComponent } from './profile/profile.component';

import {NgxEditorModule} from 'ngx-editor';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './create/create.component';
import { PostComponent } from './post/post.component';
import { ViewComponent } from './view/view.component';

let firebaseConfig = {
    apiKey: "AIzaSyDU1C2aATCx0AU6MoXnsEOBENse6tK1GPk",
    authDomain: "scribe-ac758.firebaseapp.com",
    databaseURL: "https://scribe-ac758.firebaseio.com",
    projectId: "scribe-ac758",
    storageBucket: "scribe-ac758.appspot.com",
    messagingSenderId: "12883037669",
    appId: "1:12883037669:web:c06c25e172634a1a"
  };
firebase.initializeApp(firebaseConfig); 

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule, NgxEditorModule, HttpClientModule],
  declarations: [ AppComponent, MenuComponent, SignupComponent, LoginComponent, HomeComponent, MyblogsComponent, ProfileComponent, CreateComponent, PostComponent, ViewComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AuthService]
})
export class AppModule { }
