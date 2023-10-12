import { Component, Input, OnChanges, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../../interfaces/empleado';
import { EmpleadoService } from '../../services/empleado.service'

import { Estado } from 'src/app/interfaces/estado';
import { forEach, isEmpty } from 'lodash-es';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { empty } from 'rxjs';
import { LogsTransactions } from 'src/app/interfaces/logs-transactions';

@Component({
  selector: 'app-empleados-list',
  templateUrl: './empleados-list.component.html',
  styleUrls: ['./empleados-list.component.scss']
})
export class EmpleadosListComponent implements OnInit {
  listaEmpleados: Empleado[] = [];
  listaEmpleadoss: Empleado[] = [];
  filtro: string = '';
  estado: string = '';
  empleadoForm: FormGroup;
  constructor(private router1: ActivatedRoute, private router: Router, private _empleadoService: EmpleadoService, private formBuilder: FormBuilder) {
    this.empleadoForm = new FormGroup({
      nombre: new FormControl(''),
      empresa: new FormControl(''),
    });
  }
  ObtenerListaEmpleados() {
    this._empleadoService.getList().subscribe({
      next: (data) => {
        this.listaEmpleados = data;
        const estado = Number(this.router1.snapshot.paramMap.get('estado'));
        const descuento = this.router1.snapshot.paramMap.get('estado');
        if (Number.isNaN(estado)) {
          console.log("Esto tiene descuento: ", estado)
          if (descuento) {
            this.listaEmpleados = this.listaEmpleados.filter((emple) => emple.tipodescuento?.toLowerCase().includes(descuento.toLowerCase()));
          }
        }
        else {
          console.log("Esto tiene num: ", Number.isNaN(estado))
          if (estado) {
            console.log("Esto tiene estado: ", estado)
            const num = Number(estado);
            if (num == 1) {
              this.listaEmpleados = this.listaEmpleados.filter((emple) => emple.estatus?.toLowerCase().includes("ACTIVO".toLowerCase()));
              console.log("Esto tiene num: ", num)
            }
            else if (num == 2) {
              this.listaEmpleados = this.listaEmpleados.filter((emple) => emple.estatus?.toLowerCase().includes("INACTIVO".toLowerCase()));
            }
            else if (num == 3) {
              this.listaEmpleados = this.listaEmpleados.filter((emple) => emple.estatus?.toLowerCase().includes("CESANTE".toLowerCase()));
            }
          }
        }

        this.listaEmpleadoss = data;
        this.listaEmpleadoss.filter((emple) => emple.nombre?.toLowerCase().includes(this.empleadoForm.value.nombre.toLowerCase()))
        console.log(this.listaEmpleadoss);
      },
      error: (ex) => { }
    });
  }
  filtrado(filtro: string) {
    console.log("Esto tiene filtro: ", filtro)
    //this.ObtenerListaEmpleados();

    this.listaEmpleados = this.listaEmpleadoss.filter((emple) => emple.nombre?.toLowerCase().includes(filtro.toLowerCase()))

    console.log(this.listaEmpleados);
  }
  filtradoE(filtroE: string) {
    console.log("Esto tiene filtro: ", filtroE)
    //this.ObtenerListaEmpleados();

    this.listaEmpleados = this.listaEmpleadoss.filter((emple) => emple.empresa?.toLowerCase().includes(filtroE.toLowerCase()))

    console.log(this.listaEmpleados);
  }
  ngOnInit(): void {
    this.empleadoForm.controls['nombre'].valueChanges.subscribe((name) => {
      this.filtrado(name);
    });
    this.empleadoForm.controls['empresa'].valueChanges.subscribe((empresa) => {
      this.filtradoE(empresa);
    });
    this.ObtenerListaEmpleados();
  }
  /*ngOnChanges(): void {
    this.filtrado();
  }*/
  agregarEmpleado() {
    this.router.navigate(['/empleados/empleado-detail']);
  }
  verLog(cedula: any) {
    //const cedula: logt ?logt.documento: null;
    console.log("Esto tiene cedula", cedula )
    this.router.navigate(['/empleados/log-transaction/{cedula}', { cedula }]);
  }
}  
