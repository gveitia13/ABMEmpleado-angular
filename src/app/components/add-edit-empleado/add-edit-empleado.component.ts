import {Component, OnInit} from '@angular/core';
import {MAT_RADIO_DEFAULT_OPTIONS} from "@angular/material/radio";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Empleado} from "../../models/empleado";
import {EmpleadoService} from "../../services/empleado.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-add-edit-empleado',
  templateUrl: './add-edit-empleado.component.html',
  styleUrls: ['./add-edit-empleado.component.css'],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: {color: 'primary'}
  }]
})
export class AddEditEmpleadoComponent implements OnInit {
  civil_status_list: string[] = ['Soltero', 'Casado', 'Divorciado'];
  myFrom: FormGroup
  idEmpleado: any
  action = 'Crear'

  constructor(private fb: FormBuilder, private empleadoService: EmpleadoService, private router: Router,
              public snackBar: MatSnackBar, private aRoute: ActivatedRoute) {
    this.myFrom = this.fb.group({
      full_name: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      admission_date: ['', [Validators.required,]],
      phone: ['', [Validators.required]],
      civil_status: ['', [Validators.required,]],
      sex: ['', [Validators.required,]],
    })
    this.idEmpleado = this.aRoute.snapshot.params['id']
  }

  saveEmpleado() {
    console.log(this.myFrom)
    const empleado: Empleado = {
      full_name: this.myFrom.get('full_name')?.value,
      phone: this.myFrom.get('phone')?.value,
      admission_date: this.myFrom.get('admission_date')?.value,
      email: this.myFrom.get('email')?.value,
      civil_status: this.myFrom.get('civil_status')?.value,
      sex: this.myFrom.get('sex')?.value,
    }
    if (this.idEmpleado)
      this.editEmpleado(empleado)
    else
      this.addEmpleado(empleado)

  }

  ngOnInit(): void {
    if (this.idEmpleado !== undefined) {
      this.action = 'Editar'
      this.esEditar()
    }
  }

  esEditar() {
    const empleado: Empleado = this.empleadoService.getEmpleado(this.idEmpleado)
    this.myFrom.patchValue({
      full_name: empleado.full_name,
      email: empleado.email,
      sex: empleado.sex,
      civil_status: empleado.civil_status,
      admission_date: empleado.admission_date,
      phone: empleado.phone
    })
  }

  private editEmpleado(empleado: Empleado) {
    this.empleadoService.editEmpleado(empleado, this.idEmpleado)
    this.snackBar.open('El empleado fue actualizado con éxito', '', {
      duration: 3000
    })
    this.router.navigate(['/'])
  }

  private addEmpleado(empleado: Empleado) {
    this.empleadoService.addEmpleado(empleado)
    this.snackBar.open('El empleado fue registrado con éxito', '', {
      duration: 3000
    })
    this.router.navigate(['/'])
  }
}
