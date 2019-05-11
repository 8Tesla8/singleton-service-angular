import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitcherComponent } from './switcher/switcher.component';
import { FirstModule } from '../first/first.module';

@NgModule({
  imports: [
    CommonModule,

    FirstModule
  ],
  declarations: [SwitcherComponent],
  exports: [SwitcherComponent]
})
export class ThirdModule { }
