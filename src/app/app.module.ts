import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SpaceshipComponent } from './app.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SpaceshipComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [SpaceshipComponent]
})
export class AppModule { }
