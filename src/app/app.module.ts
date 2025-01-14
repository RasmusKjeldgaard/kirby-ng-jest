import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IconModule } from '@kirbydesign/designsystem/icon';
@NgModule({
  declarations: [AppComponent],
  imports: [IconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
