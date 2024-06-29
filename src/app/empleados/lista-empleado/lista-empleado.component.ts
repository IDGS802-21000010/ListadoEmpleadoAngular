import { Component } from '@angular/core';
import { IEmpleado } from '../interfaces/empleado';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-lista-empleado',
  templateUrl: './lista-empleado.component.html',
  styleUrl: './lista-empleado.component.css'
})
export class ListaEmpleadoComponent {
  constructor(private EmpleadosService: EmpleadosService){}

  get empleados(): IEmpleado[]{
    return this.EmpleadosService.empleados;
  }

  eliminar(index: number) {
    this.EmpleadosService.eliminarEmpleado(index);
  }
}
