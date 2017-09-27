import { Component, OnInit } from '@angular/core';
import { ApiService } from '../survey.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { Survey } from '../survey';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
name;
user = new User();
allSurveys: Array<Survey>;
searchStr: string = '';

  constructor(private _api: ApiService, private _router: Router) { 
  }

  ngOnInit() {
    if (localStorage.getItem('name') === null){
      this._router.navigate(['/login']);      
    }
    this.getAllSurveys();
    this.name = localStorage.getItem('name');
  }
  getAllSurveys() {
    this._api.retrieveAll()
    .then((surveys) => { this.allSurveys = surveys; })
    .catch((err) => { console.log(err); });
  }
  logout() {
    localStorage.clear();
    this._router.navigateByUrl('login');
  }
  delete(s) {
      this._api.destroy(s)
      .then(() => {this.getAllSurveys();})
      .catch((err) => {console.log("the error is:", err)});
  }
  viewSurvey(id){
    this._router.navigateByUrl(`survey/${id}`);
  }
}
