import {Injectable} from '@angular/core';
import {Empleado} from "../models/empleado";

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  empleado_list: Empleado[] = [
    {
      full_name: 'Lucas Martinez',
      email: 'asd@adsf.com',
      phone: 1234214324,
      sex: 'Masculino',
      admission_date: new Date(),
      civil_status: 'Soltero'
    },
    {
      full_name: 'Luqweqwecas Martinez',
      email: 'asd@adsf.com',
      phone: 1234214324,
      sex: 'Masculino',
      admission_date: new Date(),
      civil_status: 'Soltero'
    },
    {
      full_name: 'Lucqweqwewqeas Martinez',
      email: 'asd@adsf.com',
      phone: 1234214324,
      sex: 'Masculino',
      admission_date: new Date(),
      civil_status: 'Soltero'
    },
    {
      full_name: 'asdasd Martinez',
      email: 'asd@adsf.com',
      phone: 1234214324,
      sex: 'Masculino',
      admission_date: new Date(),
      civil_status: 'Soltero'
    },
  ]

  constructor() {
  }

  getEmpleados() {
    return this.empleado_list.slice()
  }
}
