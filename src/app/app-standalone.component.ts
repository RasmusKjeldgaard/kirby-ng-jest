import { Component } from '@angular/core';
import { IconModule } from '@kirbydesign/designsystem/icon';

@Component({
  selector: 'app-standalone-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [IconModule],
})
export class AppStandaloneComponent {
  title = 'ng-17';
}
