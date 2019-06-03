import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService } from "../auth.service";




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;
  message: string = "";
  userError : any;
  
  constructor(public fb: FormBuilder, public authService: AuthService) { 
    this.myForm = this.fb.group({
      firstName: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      email: ['',[Validators.required]],
      password: ['',[Validators.required,Validators.minLength(8)]],
      confirmPassword: ['',[Validators.required]]
    },
    {
      validator  : this.checkmatch("password","confirmPassword")
    })
  }
  checkmatch(p: string,cp:string){
    return (fgroup:FormGroup) => {
      let password = fgroup.controls[p];
      let confirmpassword = fgroup.controls[cp];

      if (password.value==confirmpassword.value){
        return;
      } else {
        confirmpassword.setErrors({
          notEqual: true
        })
      }
    }
  }
  onSubmit(pform){
    let email: string = pform.value.email;
    let password: string = pform.value.password;
    let firstName: string = pform.value.firstName;
    let lastName: string = pform.value.lastName;

    this.authService.signup(email, password, firstName, lastName).then(() => {
     
          this.message = "You have signed up successfully"
    
      
    }).catch((error) => {
      console.log(error);
      this.userError = error;
    })
  }

  ngOnInit() {
  }

}