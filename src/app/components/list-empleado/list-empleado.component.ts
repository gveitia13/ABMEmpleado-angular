import {Component, ViewChild, AfterViewInit, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from "@angular/material/sort";
import {EmpleadoService} from "../../services/empleado.service";
import {Empleado} from "../../models/empleado";
import {MatDialog} from "@angular/material/dialog";
import {MensajeConfirmacionComponent} from "../shared/mensaje-confirmacion/mensaje-confirmacion.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css']
})
export class ListEmpleadoComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['full_name', 'email', 'civil_status', 'admission_date', 'sex', 'phone', 'actions'];
  dataSource: MatTableDataSource<Empleado> = new MatTableDataSource();
  empleado_list: Empleado[] = []

  constructor(private empleadoService: EmpleadoService, public dialog: MatDialog, public snackBar: MatSnackBar) {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null
  @ViewChild(MatSort) sort: MatSort | null = null;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit(): void {

  }

  loadEmpleados() {
    this.empleado_list = this.empleadoService.getEmpleados()
    this.dataSource = new MatTableDataSource(this.empleado_list);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.loadEmpleados()
  }

  deleteEmpleado(i: number) {
    const dialogRef = this.dialog.open(MensajeConfirmacionComponent, {
      width: '350px',
      data: {mensaje: 'Estás seguro que desea eliminar el empleado?'},
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'aceptar') {
        this.empleadoService.deleteEmpleado(i)
        this.loadEmpleados()
        this.snackBar.open('El empleado fue eliminado con éxito', '', {
          duration: 3000
        })
      }
    });
  }
}
