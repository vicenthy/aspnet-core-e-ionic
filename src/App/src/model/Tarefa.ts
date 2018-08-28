import { SubTarefa } from './SubTarefa';
export class Tarefa {
    id:number;
    nomeTarefa:string;
    descricao?:string;
    feito:boolean;
    subTarefas?:Array<SubTarefa>;
}
