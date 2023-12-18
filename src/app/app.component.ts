import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { HeaderComponent } from '@kirbydesign/designsystem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild(HeaderComponent, { static: true }) header!: HeaderComponent;

  ngAfterViewInit(): void {
    // console.log('AppComponent: header', this.header);
    throw new Error(`AppComponent: header -  ${this.header.titleClick}`);
  }

  title = 'ng-16';
}
