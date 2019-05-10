import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowinfoComponent } from './showinfo/showinfo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShowinfoComponent],
  exports: [ShowinfoComponent]
})
export class FirstModule { }
