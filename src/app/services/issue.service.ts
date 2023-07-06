import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private url ="http://localhost:8090/api/is/issued"


  constructor(private http: HttpClient) {

  }
  post(body:any){
    return this.http.post(this.url,body);
  }
  getAll(){
    return this.http.get(this.url);
  }
  getById(id:any){
    return this.http.get(`${this.url}/${id}`);
  }
  deleteById(id:any){
    return this.http.delete(`${this.url}/${id}`);
  }
  update(id:any,body:any){
    return this.http.put(`${this.url}/${id}`,body)
  }
}

