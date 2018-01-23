import { Component, OnInit } from '@angular/core';
import { Artigo } from './artigo.class';
import { ArtigoService } from './artigo.service';

@Component({
  selector: 'app-artigo',
  templateUrl: './artigo.component.html',
  styleUrls: ['./artigo.component.css']
})
export class ArtigoComponent implements OnInit {
  artigos : Artigo[];

  constructor(private service:ArtigoService) { }

  ngOnInit() {
    this.service.getArtigos().subscribe(data => {
      this.artigos = data;
    });
  }

}
