import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectComponent } from './project/project.component';
import { RouteNotFoundComponentComponent } from './route-not-found-component/route-not-found-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProfileComponent,
    ResumeComponent,
    ProjectsComponent,
    ProjectComponent,
    RouteNotFoundComponentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
