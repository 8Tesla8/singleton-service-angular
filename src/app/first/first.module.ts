import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowinfoComponent } from './showinfo/showinfo.component';
import { InfoService } from '../service/info.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [InfoService],
  declarations: [ShowinfoComponent],
  exports: [ShowinfoComponent]
})
export class FirstModule { }
