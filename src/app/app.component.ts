import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'employeecrud';


  signupUsers: any[] = [];
  signupObj: any  ={
    username:'',
    email:'',
    password:''

  };
  loginObj: any  ={
    username:'',
    password:''

  };


  constructor(){

  }

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if(localData != null){
      this.signupUsers =JSON.parse(localData)
    }
  }


  onLogin(){

    const isUserExist = this.signupUsers.find(m=> m.username == this.loginObj.username && m.password == this.loginObj.password);
    if(isUserExist != undefined){
      alert('User Login successfully');

    }else{

      alert('try again(wrong credentials)');
    }

  }

  onSignup(){

    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
    this.signupObj  ={
      username:'',
      email:'',
      password:''
  
    }

  }

}
