import { BASE_URL } from './../../api';
import { Tarefa } from './../../model/Tarefa';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Result } from '../../model/Result';

/*
  Generated class for the TarefaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TarefaProvider {

  constructor(public http: HttpClient) {

  }

  public adicionar(tarefa):Observable<Tarefa> {
   return this.http.post<Tarefa>(`${BASE_URL}/tarefa/nova`, tarefa);
  }

  deletar(id):Observable<Result> {
    return this.http.delete<Result>(`${BASE_URL}/tarefa/deletar/${id}`);
  }


  public update(tarefa):Observable<Result> {
    return this.http.put<Result>(`${BASE_URL}/tarefa/update`, tarefa);
   }

  public carregarTarefas(): Observable<Array<Tarefa>> {
    return this.http.get<Array<Tarefa>>(`${BASE_URL}/tarefa/todas`);
  }

  public carregarTarefasById(id:number): Observable<Tarefa> {
    return this.http.get<Tarefa>(`${BASE_URL}/tarefa/obter/${id}`);
  }

}
