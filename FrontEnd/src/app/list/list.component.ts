import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
contacts:any;
  //constructor() { }
  constructor(private service: ApiService) { }
  columns = ["name", "power", "stat(strength)", "stat(intelligence)", "stat(stamina)"];
  ngOnInit() {
     this.service.listContacts().subscribe
     (
       (response) => {
         this.contacts = response;
         console.log(this.contacts);
       },
       (error) => console.log(error)
     )
}
public evolve(contact, i)
{
 
  this.service.evlove(contact).subscribe
  (    
    (response) => {      
      this.contacts[i] = response;
      console.log(response);

    },
    (error) => console.log(error)
  )
}
}
