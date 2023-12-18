import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KirbyModule } from '@kirbydesign/designsystem';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, KirbyModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
