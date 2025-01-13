import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemModule } from '@kirbydesign/designsystem/item';
import { IconModule } from '@kirbydesign/designsystem/icon';
import { PageModule } from '@kirbydesign/designsystem/page';
import { CheckboxComponent } from '@kirbydesign/designsystem/checkbox';
import { HeaderModule } from '@kirbydesign/designsystem/header';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageModule,
    IconModule,
    ItemModule,
    HeaderModule,
    CheckboxComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
