import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginclienteComponent } from './logincliente/logincliente.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { GestaoClienteComponent } from './gestao-cliente/gestao-cliente.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' }, 
  {path: 'home', component: HomeComponent},
  {path: 'logincliente', component: LoginclienteComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'gestaocliente/{hash}', component: GestaoClienteComponent}
]; 

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
