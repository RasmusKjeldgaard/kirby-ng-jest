import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { KirbyModule } from '@kirbydesign/designsystem';
import { Routes, provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

const routes: Routes = [];

export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom(KirbyModule), provideRouter(routes)],
};

bootstrapApplication(AppComponent, appConfig);
