import { Injectable } from '@angular/core';
import { IEmpleado } from './interfaces/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private _empleados: IEmpleado[] = [];

  constructor() { 
    if (this.isLocalStorageAvailable()) {
      const empleados = localStorage.getItem('empleados');
      this._empleados = empleados ? JSON.parse(empleados) : [];
    } else {
      this._empleados = [];
    }
  }

  get empleados(): IEmpleado[]{
    return this._empleados;
  }

  agregarEmpleado(empleado: IEmpleado){
    this._empleados.push(empleado);

    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('empleados', JSON.stringify(this._empleados));
    }
  }

  eliminarEmpleado(index: number){
    if(index >= 0 && index < this._empleados.length){
      this._empleados.splice(index, 1);
      if (this.isLocalStorageAvailable()) {
        localStorage.setItem('empleados', JSON.stringify(this._empleados));
      }
    }
  }

  private isLocalStorageAvailable(): boolean {
    try {
      const test = '__test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }
}
