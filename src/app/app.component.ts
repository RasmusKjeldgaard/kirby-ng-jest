import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from '@kirbydesign/designsystem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(HeaderComponent, { static: true }) header!: HeaderComponent;

  title = 'ng-16';
}
