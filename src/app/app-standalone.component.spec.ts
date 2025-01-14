import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppStandaloneComponent } from './app-standalone.component';
import { KirbyTestingModule } from '@kirbydesign/designsystem/testing-jest';

describe('AppStandaloneComponent', () => {
  let component: AppStandaloneComponent;
  let fixture: ComponentFixture<AppStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KirbyTestingModule, AppStandaloneComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'ng-17'`, () => {
    expect(component).toEqual('ng-17');
  });
});
