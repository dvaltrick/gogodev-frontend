import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logincliente',
  templateUrl: './logincliente.component.html',
  styleUrls: ['./logincliente.component.css']
})
export class LoginclienteComponent implements OnInit {
  codigoCliente : string = "";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public open(){   
    this.router.navigateByUrl('/gestaocliente/'+this.codigoCliente);;
  }
}
