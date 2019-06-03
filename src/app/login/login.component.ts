import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService } from "../auth.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  message: string = "";
  userError : any;
  
  constructor(public fb:FormBuilder, public authService: AuthService,public router:Router) {
    this.myForm = this.fb.group({
     
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required]]
     
    }) 
    }

  ngOnInit() {
  }

  onSubmit(pform){


    this.authService.login(pform.value.email, pform.value.password).then((response) => {
      console.log(response); 
      this.message = "You have logged in successfully";
      this.router.navigate(['/myblogs']);
    
    }).catch((error) => {
      console.log(error);
      this.userError = error;
    })
  }

}