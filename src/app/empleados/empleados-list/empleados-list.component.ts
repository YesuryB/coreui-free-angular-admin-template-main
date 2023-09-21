import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../../interfaces/empleado';
import { EmpleadoService } from '../../services/empleado.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estado } from 'src/app/interfaces/estado';
import { forEach } from 'lodash-es';
import { Descuento } from 'src/app/interfaces/descuento';

@Component({
  selector: 'app-empleados-list',
  templateUrl: './empleados-list.component.html',
  styleUrls: ['./empleados-list.component.scss']
})

export class EmpleadosListComponent implements OnInit {
  listaEmpleados: Empleado[] = [];
  
  
  constructor(private router: Router, private _empleadoService: EmpleadoService) {
  }
  ObtenerListaEmpleados() {
    this._empleadoService.getList().subscribe({
      next: (data) => {
        this.listaEmpleados = data;
        console.log(this.listaEmpleados);
        /*this._empleadoService.getEstadoList().subscribe({
          next: (data1) => {
            this.listaEmpleados.forEach((elemento) => {
              this.listaEstados = data1;
            });

            //this.listaEstados = data1;
          }
        });
        /*this._empleadoService.getDescuentoList().subscribe({
          next: (data2) => {
            this.listaEmpleados.forEach((elemento2) => {
              this.listaDescuentos = data2;
              this.listaDescuentos.forEach((elemento3) => {
                if (elemento2.idtipodescuento == elemento3.id) {
                  elemento2.Descuento = elemento3.nombre;
                }
              })
            })
            //this.listaEstados = data1;
          }
        });*/
      },
      error: (ex) => { }
    });
  }
  ngOnInit(): void {
    this.ObtenerListaEmpleados();
  }
  agregarEmpleado() {
    this.router.navigate(['/empleados/empleado-detail']);
  }
}
