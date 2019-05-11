import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditinfoComponent } from './editinfo/editinfo.component';
import { InfoService } from '../service/info.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [InfoService],
  declarations: [EditinfoComponent],
  exports: [EditinfoComponent]
})
export class SecondModule { }
