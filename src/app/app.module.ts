import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HttpClient  } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LoginclienteComponent } from './logincliente/logincliente.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { GestaoClienteComponent } from './gestao-cliente/gestao-cliente.component';
import { GestaoClienteService } from './gestao-cliente/gestao-cliente.service';
import { CollapseModule } from 'ngx-bootstrap/collapse/collapse.module';

import { ChartsModule } from 'ng2-charts';

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
    FormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    ChartsModule,
    CollapseModule.forRoot()
  ],
  providers: [
    GestaoClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
