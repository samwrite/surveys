import { Component, OnInit } from '@angular/core';
import { ApiService } from '../survey.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  
  constructor(private _api: ApiService, private _router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('name') !== null){
      this._router.navigate(['/dashboard']);      
    }
  }

  validateReg() {
    this._api.registerUser(this.user)
      .then(() => { 
        localStorage.setItem('name', String(this.user.name))
        this._router.navigate(['/dashboard']); })
      .catch((err) => { console.log('There was an error') });
  }
}
