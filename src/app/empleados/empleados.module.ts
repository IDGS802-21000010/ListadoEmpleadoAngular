import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarEmpleadoComponent } from './agregar-empleado/agregar-empleado.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FormsModule } from '@angular/forms';
import { EmpleadosService } from './empleados.service';
import { ListaEmpleadoComponent } from './lista-empleado/lista-empleado.component';



@NgModule({
  declarations: [
    AgregarEmpleadoComponent,
    CabeceraComponent,
    ListaEmpleadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CabeceraComponent,
    AgregarEmpleadoComponent,
    ListaEmpleadoComponent
  ],
  providers: [
    EmpleadosService
  ]
})
export class EmpleadosModule { }
