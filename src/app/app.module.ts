import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import{MDBBootstrapModule} from 'angular-bootstrap-md'
import { AppComponent } from './app.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { TopbarComponentComponent } from './topbar-component/topbar-component.component';
import { MidSectionComponent } from './mid-section/mid-section.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarMenuComponent,
    TopbarComponentComponent,
    MidSectionComponent,
    FooterComponentComponent
  ],
  imports: [
    BrowserModule,MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas :[NO_ERRORS_SCHEMA]
})
export class AppModule { }
