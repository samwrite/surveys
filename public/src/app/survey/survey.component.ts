import { Component, OnInit } from '@angular/core';
import { ApiService } from '../survey.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
survey;
  constructor(private _api: ApiService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    if (localStorage.getItem('name') === null){
      this._router.navigate(['/login']);      
    }
    this._route.params.subscribe(params => {
      this._api.retrieveOne(params['id']).then((data) =>
    this.survey = data)
    })
  }
  vote1(){
    this.survey.o1c += 1;
  }
  vote2(){
    this.survey.o2c += 1;
  }
  vote3(){
    this.survey.o3c += 1;
  }
  vote4(){
    this.survey.o4c += 1;
  }
}
