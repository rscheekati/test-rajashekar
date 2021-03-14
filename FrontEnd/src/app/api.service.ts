import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public listContacts() {
    return this.http.get("http://localhost:4201/api/heroes");
  }
  public evlove(contact)
  {
   return  this.http.post("http://localhost:4201/api/heroes/evolve",contact);
  }
}