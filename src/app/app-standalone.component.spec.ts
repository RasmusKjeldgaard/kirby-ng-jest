import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppStandaloneComponent } from './app-standalone.component';
import { KirbyTestingModule } from '@kirbydesign/designsystem/testing-jest';

describe('AppStandaloneComponent', () => {
  let component: AppStandaloneComponent;
  let fixture: ComponentFixture<AppStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        KirbyTestingModule,
        AppStandaloneComponent,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(fixture).toBeTruthy();
  });

  it(`should have as title 'ng-17'`, () => {
    expect(fixture.componentInstance.title).toEqual('ng-17');
  });
});
