import { Tarefa } from "./tarefa";

export class Projeto{
    id: number;
    nome: string;
    escopo: string;
    cliente_id: number;
    tarefas: Tarefa[];
    pieChartData:number[];
}