import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './cliente';
import { Promise } from 'q';
import { Observable } from 'rxjs/Observable';
import { Projeto } from './projeto';
import { Tarefa } from './tarefa';

@Injectable()
export class GestaoClienteService {
  URLbase = "http://localhost:8000/api/";


  constructor(private http: HttpClient) { }

  public buscarCliente(hash:string) : Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.URLbase+'clientes/'+hash);
  }

  public buscarProjetos(clienteId:number):Observable<Projeto[]>{
    return this.http.get<Projeto[]>(this.URLbase+'projetos/'+clienteId);
  }

  public buscarTarefasDoProjeto(projetoId:number):Observable<Tarefa[]>{
    return this.http.get<Tarefa[]>(this.URLbase+'tarefas/'+projetoId);  
  }

}
