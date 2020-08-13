import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MkwListModule } from 'mkw-list';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MkwListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
