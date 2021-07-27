import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimerEjercicioComponent } from './PrimerEjercicio/PEjercicio.component';
import { SegundoEjercicioComponent } from './SegundoEjercicio/SEjercicio.component';


@NgModule({
  declarations: [
    AppComponent, 
    PrimerEjercicioComponent, 
    SegundoEjercicioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
