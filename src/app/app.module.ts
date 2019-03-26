import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { AlumnosListComponent } from './components/alumnos-list/alumnos-list.component';
import { AlumnoComponent } from './components/alumnos/alumno/alumno.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AmigosComponent } from './components/amigos/amigos.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { MujeresComponent } from './components/mujeres/mujeres.component';
import { TendenciasComponent } from './components/tendencias/tendencias.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    AlumnosListComponent,
    AlumnoComponent,
    InicioComponent,
    ContactoComponent,
    AmigosComponent,
    RegistrarComponent,
    MujeresComponent,
    TendenciasComponent,
    RegistrarseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
