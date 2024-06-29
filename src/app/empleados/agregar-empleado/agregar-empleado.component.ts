import { Component } from '@angular/core';
import { IEmpleado } from '../interfaces/empleado';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrl: './agregar-empleado.component.css'
})
export class AgregarEmpleadoComponent {
  nuevo: IEmpleado = {
    numEmpleado: 0,
    nombre: "",
    correo: "",
    telefono: "",
    fechaNacimiento: new Date(),
    sexo: true
  }

  constructor(private EmpleadosService: EmpleadosService){}

  agregar() {
    //Validaciones 
    if(this.nuevo.nombre.trim().length === 0)
      return;
    
    if(this.nuevo.correo.trim().length === 0)
      return;

    if(this.nuevo.telefono === null)
      return;

    //Agregamos el nuevo cliente a traves del servicio
    this.EmpleadosService.agregarEmpleado(this.nuevo);

    this.nuevo = {
      numEmpleado: 0,
      nombre: "",
      correo: "",
      telefono: "",
      fechaNacimiento: new Date(),
      sexo: true
    }
  }
}
