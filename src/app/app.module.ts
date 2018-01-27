import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HttpClient  } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LoginclienteComponent } from './logincliente/logincliente.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { GestaoClienteComponent } from './gestao-cliente/gestao-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginclienteComponent,
    PortfolioComponent,
    GestaoClienteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
