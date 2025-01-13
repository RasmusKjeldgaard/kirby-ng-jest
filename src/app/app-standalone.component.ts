import { Component } from '@angular/core';
import { ItemModule } from '@kirbydesign/designsystem/item';
import { IconModule } from '@kirbydesign/designsystem/icon';
import { PageModule } from '@kirbydesign/designsystem/page';
import { CheckboxComponent } from '@kirbydesign/designsystem/checkbox';
import { HeaderModule } from '@kirbydesign/designsystem/header';

@Component({
  selector: 'app-standalone-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    PageModule,
    IconModule,
    ItemModule,
    HeaderModule,
    CheckboxComponent,
  ],
})
export class AppStandaloneComponent {
  title = 'ng-17';
}
