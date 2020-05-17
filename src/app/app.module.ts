import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar.component';
import { NavbarComponent } from './layout/navbar.component';
import { FooterComponent } from './layout/footer.component';
import { DashboardPageComponent } from './pages/dashboard-page.component';
import { ProfilePageComponent } from './pages/profile-page.component';
import { ProjectsPageComponent } from './pages/projects-page.component';
import { TargetDirective } from './portal/target.directive';
import { AttachToDirective } from './portal/attach-to.directive';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    DashboardPageComponent,
    ProfilePageComponent,
    ProjectsPageComponent,
    TargetDirective,
    AttachToDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
