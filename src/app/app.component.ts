import { Component } from '@angular/core';
import {
  CheckboxComponent,
  HeaderModule,
  IconModule,
  ItemModule,
  PageModule,
} from '@kirbydesign/designsystem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    PageModule,
    ItemModule,
    IconModule,
    CheckboxComponent,
    HeaderModule,
  ],
  standalone: true,
})
export class AppComponent {
  title = 'ng-18';
}
