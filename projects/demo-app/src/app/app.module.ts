import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MkwListModule } from 'mkw-list';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MkwListModule, NoopAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
