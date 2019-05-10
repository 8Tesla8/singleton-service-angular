import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditinfoComponent } from './editinfo/editinfo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EditinfoComponent],
  exports: [EditinfoComponent]
})
export class SecondModule { }
