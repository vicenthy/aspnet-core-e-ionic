import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubTarefaPage } from './sub-tarefa';

@NgModule({
  declarations: [
    SubTarefaPage,
  ],
  imports: [
    IonicPageModule.forChild(SubTarefaPage),
  ],
})
export class SubTarefaPageModule {}
