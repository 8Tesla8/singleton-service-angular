import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.css']
})
export class SwitcherComponent implements OnInit {

  private _show = false;

  constructor() { }

  ngOnInit() {
  }


  public onSwitch(): void{
    this._show = !this._show;
  }
}
