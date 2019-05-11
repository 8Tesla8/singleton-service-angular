import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/service/info.service';

@Component({
  selector: 'app-editinfo',
  templateUrl: './editinfo.component.html',
  styleUrls: ['./editinfo.component.css']
})
export class EditinfoComponent implements OnInit {

  constructor(private infoService: InfoService) { }

  ngOnInit() {
  }

  public get editName(){
    return this.infoService.name;
  }
  public set editName(value:string){
    this.infoService.name = value;    
  }

  
  public get editSurname(){
    return this.infoService.surname;
  }
  public set editSurname(value:string){
    this.infoService.surname = value;    
  }
}
