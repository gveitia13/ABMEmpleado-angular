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

  deleteEmpleado(i: number) {
    this.empleado_list.splice(i, 1)
  }

  addEmpleado(empleado: Empleado) {
    this.empleado_list.push(empleado)
  }

  getEmpleado(index: number) {
    return this.empleado_list[index]
  }

  editEmpleado(empleado: Empleado, idEmpleado: number) {
    this.empleado_list[idEmpleado].full_name = empleado.full_name
    this.empleado_list[idEmpleado].email = empleado.email
    this.empleado_list[idEmpleado].sex = empleado.sex
    this.empleado_list[idEmpleado].admission_date = empleado.admission_date
    this.empleado_list[idEmpleado].civil_status = empleado.civil_status
    this.empleado_list[idEmpleado].phone = empleado.phone
  }
}
