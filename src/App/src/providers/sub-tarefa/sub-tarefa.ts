import { BASE_URL } from './../../api';
import { SubTarefa } from './../../model/SubTarefa';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Result } from '../../model/Result';
/*
  Generated class for the SubTarefaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SubTarefaProvider {

  constructor(public http: HttpClient) {

  }

  public adicionar(subtarefa):Observable<Result> {
   return this.http.post<Result>(`${BASE_URL}/subtarefa/nova`, subtarefa);
  }

  deletar(id):Observable<Result> {
    return this.http.delete<Result>(`${BASE_URL}/subtarefa/deletar/${id}`);
  }


  public update(subtarefa):Observable<Result> {
    return this.http.put<Result>(`${BASE_URL}/subtarefa/update`, subtarefa);
   }

  public carregarsubtarefas(): Observable<Array<SubTarefa>> {
    return this.http.get<Array<SubTarefa>>(`${BASE_URL}/subtarefa/todas`);
  }

}
