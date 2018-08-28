import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TooltipsModule } from 'ionic-tooltips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
import { SubTarefaPage } from '../pages/sub-tarefa/sub-tarefa';
import { TarefaProvider } from '../providers/tarefa/tarefa';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SubTarefaProvider } from '../providers/sub-tarefa/sub-tarefa';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProgressBarComponent,
    SubTarefaPage
  ],
  imports: [
    BrowserModule,
    TooltipsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SubTarefaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClient,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TarefaProvider,
    SubTarefaProvider
  ]
})
export class AppModule {}
