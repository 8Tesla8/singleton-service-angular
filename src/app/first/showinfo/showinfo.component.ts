import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/service/info.service';

@Component({
  selector: 'app-showinfo',
  templateUrl: './showinfo.component.html',
  styleUrls: ['./showinfo.component.css']
})
export class ShowinfoComponent implements OnInit {

  constructor(private infoService: InfoService) { }

  ngOnInit() {
  }

  public get showName(){
    return this.infoService.name;
  }

  public get showSurname(){
    return this.infoService.surname;
  }
}
