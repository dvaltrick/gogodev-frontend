import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logincliente',
  templateUrl: './logincliente.component.html',
  styleUrls: ['./logincliente.component.css']
})
export class LoginclienteComponent implements OnInit {
  codigoCliente : string;

  constructor() { }

  ngOnInit() {
  }

  public open(){   
    console.log("Testeeee");
    alert("Oiii");
  }
}
