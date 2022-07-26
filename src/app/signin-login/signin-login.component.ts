import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin-login',
  templateUrl: './signin-login.component.html',
  styleUrls: ['./signin-login.component.css']
})
export class SigninLoginComponent  {
   List:any;
  
  isVisible: boolean = true;
  username:string='';
  password:string='';
  mobileNumber:string='';
  email:string='';
  ClickHere() {
    
    
    console.log('UserName:',this.username);
    console.log('PassWord:',this.password);
    console.log('MobileNumber:',this.mobileNumber);
    console.log('Email:',this.email);
   
    
     this.List = [
      
     
      {
        username:this.username,
       
      },
      {
        password:this.password,
        
      },
      {
        mobileNumber: this.mobileNumber,
       
      },
      {
        email: this.email,
       
      },
      
    ]
    console.log('UserName:',this.List);
  }

   
    
    hideList(){
      this.isVisible = false;
  }
  
  
  }
  
  
  
  


