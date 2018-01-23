import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { ArtigoComponent } from './artigo/artigo.component';
import { TagComponent } from './tag/tag.component';
import { ArtigoService } from './artigo/artigo.service';
import { HttpClientModule, HttpClient  } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { DetalheArtigoComponent } from './detalhe-artigo/detalhe-artigo.component';
import { DetalheArtigoService } from './detalhe-artigo/detalhe-artigo.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtigoComponent,
    TagComponent,
    DetalheArtigoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ArtigoService, DetalheArtigoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
