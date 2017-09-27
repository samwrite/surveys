import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Survey } from '../survey';
import { ApiService } from '../survey.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  survey = new Survey();

  constructor(private _api: ApiService, private _router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('name') === null){
      this._router.navigate(['/login']);      
    }
  }

  addSurvey() {
    console.log('hello fool')
    this._api.create(this.survey)
    .then(() => {this._router.navigate(['/dashboard'])})
    .catch((err) => {console.log(err)});
  }
}