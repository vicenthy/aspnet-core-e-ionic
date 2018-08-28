import { SubTarefaProvider } from './../../providers/sub-tarefa/sub-tarefa';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Tarefa } from '../../model/Tarefa';
import { TarefaProvider } from '../../providers/tarefa/tarefa';
import { SubTarefa } from '../../model/SubTarefa';

/**
 * Generated class for the SubTarefaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sub-tarefa',
  templateUrl: 'sub-tarefa.html',
  providers: [TarefaProvider]
})
export class SubTarefaPage {

  public tarefa?:Tarefa;
  public subTarefa?:SubTarefa;

  constructor(public event:Events, public navCtrl: NavController, public navParams: NavParams,
    public subtarefaProvider: SubTarefaProvider, public tarefaProvider: TarefaProvider) {
    this.tarefa = this.navParams.data;
    this.iniciarNovaSubTarefa();
  }


public adicionar() {

  if(this.subTarefa.nomeSubTarefa !== ""){

  this.tarefa.subTarefas.push(this.subTarefa);
  this.tarefaProvider
      .update(this.tarefa)
      .subscribe( response => {
        if(response.error === ""){
              this.iniciarNovaSubTarefa();
              this.atualizarFeitos();
        }

      });
    }
}


alterarSubTarefa(subtarefa) {
  subtarefa.feito = subtarefa.feito ? false : true;
  this.subtarefaProvider
      .update(subtarefa)
      .subscribe(response => {
        if(response.error === "")
          this.atualizarFeitos();

      });
}

private atualizarFeitos() {
  this.tarefaProvider
      .carregarTarefasById(this.tarefa.id)
      .subscribe(response => {

        this.tarefa = response;

        if(this.tarefa.subTarefas.every(a => a.feito == true)){
          this.tarefa.feito = true;
        }else{
          this.tarefa.feito = false;
        }

        this.tarefaProvider
            .update(this.tarefa)
            .subscribe(response => {
              if(response.error === "")
              this.event.publish("atualizarFeitos");

            });

      });

}
private iniciarNovaSubTarefa() {
  this.subTarefa = new SubTarefa();
  this.subTarefa.descricao = "";
  this.subTarefa.nomeSubTarefa = "";
  this.subTarefa.feito = false;
  this.subTarefa.tarefaID = this.tarefa.id;
}



  deletar(subtarefa) {
    this.subtarefaProvider
        .deletar(subtarefa.id)
        .subscribe( response => {
          if(response.error === "")
            this.atualizarFeitos();
        })

}



}
