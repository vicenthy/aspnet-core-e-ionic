import { Tarefa } from './../../model/Tarefa';
import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { SubTarefaPage } from '../sub-tarefa/sub-tarefa';
import { TarefaProvider } from '../../providers/tarefa/tarefa';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [TarefaProvider]
})
export class HomePage {


  public loadProgress: number = 0;
  public tarefa?: Tarefa;
  public tarefas?: Array<Tarefa>;

  constructor(public event: Events, public navCtrl: NavController, public tarefaProvider: TarefaProvider) {
    this.carregarTarefas();
    this.atualizarFeitos();
    this.iniciarTarefa();
    this.event.subscribe("atualizarFeitos", () => {
      this.atualizarFeitos();
    });

  }


  private carregarTarefas() {
    this.tarefaProvider.carregarTarefas()
      .subscribe(response => {
        this.tarefas = response;
      });

  }

  private iniciarTarefa() {
    this.tarefa = new Tarefa();
    this.tarefa.descricao = "";
    this.tarefa.nomeTarefa = "";
    this.tarefa.feito = false;
    this.tarefa.subTarefas = [];
  }

  navegarParaSubTarefas(tarefa) {
    this.navCtrl.push(SubTarefaPage, tarefa);
  }

  public adicionar() {
    if(this.tarefa.nomeTarefa !== ""){
    this.tarefaProvider.adicionar(this.tarefa).subscribe( response => {
      this.tarefa = response;
      this.event.publish("atualizarFeitos");
      this.iniciarTarefa();
      this.navegarParaSubTarefas(response);
    });
  }


  }

  deletar(id) {
    this.tarefaProvider.deletar(id).subscribe( response => {
      if(response.error === "")
        this.event.publish("atualizarFeitos");
    });

  }

  alterarTarefa(tarefa) {
    tarefa.feito = this.atualizarSubTarefa(tarefa);
    this.tarefaProvider.update(tarefa).subscribe(response => {
      if(response.error === "")
        this.event.publish("atualizarFeitos")

    });
  }


  private atualizarSubTarefa(tarefa) {
    if (tarefa.feito) {
      tarefa.subTarefas.forEach(subtarefa => {
        subtarefa.feito = false;
      });
      return false;
    } else {
      tarefa.subTarefas.forEach(subtarefa => {
        subtarefa.feito = true;
      });
      return true;
    }
  }


    verificarFeitos(tarefas = this.tarefas): number {
      return tarefas.filter(tarefaFilter => tarefaFilter.feito == true).length;
    }

    public atualizarFeitos() {
      this.tarefaProvider
          .carregarTarefas()
          .subscribe( response => {
             this.tarefas = response;
             this.loadProgress = Number( ((this.verificarFeitos(this.tarefas) / this.tarefas.length) * 100).toFixed(2) );
          });
    }

    search(text: any) {
      const val = text.target.value;
      if (val && val.trim() != '') {
        this.tarefaProvider
        .carregarTarefas().subscribe(response => {
          this.tarefas = response.filter((filter) => {
            return (filter.nomeTarefa.toLowerCase().indexOf(val.toLowerCase()) > -1);

          });
        });

      }
    }

}
