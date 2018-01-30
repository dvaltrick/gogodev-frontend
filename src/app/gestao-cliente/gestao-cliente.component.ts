import { Component, OnInit } from '@angular/core';
import { GestaoClienteService } from './gestao-cliente.service';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from './cliente';
import { Projeto } from './projeto';

@Component({
  selector: 'app-gestao-cliente',
  templateUrl: './gestao-cliente.component.html',
  styleUrls: ['./gestao-cliente.component.css']
})
export class GestaoClienteComponent implements OnInit {
  private codigoParam:string;
  private cliente:Cliente;
  private projetos: Projeto[];

  constructor(
    private route: ActivatedRoute,
    private gestaoClientesService: GestaoClienteService) { }

  async ngOnInit() {

    this.route.params.subscribe(params =>{
      this.codigoParam = params['hash'];
    });

    if(this.codigoParam.length > 0){
      this.gestaoClientesService.buscarCliente(this.codigoParam).subscribe(data => {
        if(data.length > 0){
          this.cliente = data[0];

          this.gestaoClientesService.buscarProjetos(this.cliente.id).subscribe(data => {
            this.projetos = data;

            this.projetos.forEach(element => {
              this.gestaoClientesService.buscarTarefasDoProjeto(element.id).subscribe(data=>{
                console.log('Element');
                console.log(data);
                element.tarefas = data;
              });  
            });
            console.log('Projetos');
            console.log(this.projetos);
          });

        }else{
          //Redirecionar
        }
      }); 
    }else{
      //Redirecionar!!!!!
    }
  }

}
