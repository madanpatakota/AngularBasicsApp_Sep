import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompAComponent } from './CompA/compA.component';

@NgModule({
  declarations: [
    AppComponent,
    CompAComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]   // 1 st batsman Abhishek sharma
})
export class AppModule { }
