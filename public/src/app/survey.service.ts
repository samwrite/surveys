import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class ApiService {

  constructor(private _http: Http) { }

  retrieveAll() {
    return this._http.get('/surveys').map(data => data.json()).toPromise();
  }
  retrieveOne(id) {
    id = {id: id};
    return this._http.post('/survey', id).map(data => data.json()).toPromise();
  }

  addUser(user){
    return this._http.post('/register', user).map(data => data.json()).toPromise();
  }
  create(survey) {
    return this._http.post('/survey', survey).map(data => data.json()).toPromise();
  }
  registerUser(user) {
    return this._http.post('/register', user).map(data => data.json()).toPromise();
  }
  destroy(survey) {
    return this._http.post('/survey/destroy', survey).map(data => data.json()).toPromise();
  } 
}
