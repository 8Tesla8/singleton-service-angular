import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SecondModule } from './second/second.module';
import { ThirdModule } from './third/third.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    ThirdModule,
    SecondModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
