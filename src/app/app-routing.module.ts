import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArtigoComponent } from './artigo/artigo.component';
import { TagComponent } from './tag/tag.component';
import { DetalheArtigoComponent } from './detalhe-artigo/detalhe-artigo.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' }, 
  {path: 'home', component: HomeComponent},
  {path: 'artigos', component: ArtigoComponent},
  {path: 'artigos/:id', component: DetalheArtigoComponent},
  {path: 'tags', component: TagComponent}
]; 

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
