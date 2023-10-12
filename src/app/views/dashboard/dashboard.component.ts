import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

import { DashboardChartsData, IChartProps } from './dashboard-charts-data';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/interfaces/empleado';


@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  listaEmpleados: Empleado[] = [];
  activo: number = 0;
  cesante: number = 0;
  inactivo: number = 0;
  admini: number = 0;
  accioni: number = 0;
  gerente: number = 0;
  tienda: number = 0;
  total: number = 0;
  //labels:string[]=[]
  datachart = {
    labels: [''],
    datasets: [
      {
        label: 'Empleados por empresa',
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
        data: [0]
      }
    ]
  };
  constructor(private router: Router, private _empleadoService: EmpleadoService) {

  }

  ngOnInit(): void {
    console.log(this.listaEmpleados.length);
    this.initCharts();
  }
  initCharts(): void {

    this._empleadoService.getList().subscribe({
      next: (data) => {
        this.listaEmpleados = data;
        this.total = this.listaEmpleados.length;
        this.activo = this.listaEmpleados.filter((emple) => emple.estatus?.toLowerCase().includes("ACTIVO".toLowerCase())).length;
        this.cesante = this.listaEmpleados.filter((emple) => emple.estatus?.toLowerCase().includes("CESANTE".toLowerCase())).length;
        this.inactivo = this.listaEmpleados.filter((emple) => emple.estatus?.toLowerCase().includes("INACTIVO".toLowerCase())).length;
        this.accioni = this.listaEmpleados.filter((emple) => emple.tipodescuento?.toLowerCase().includes("ACCIONISTA".toLowerCase())).length;
        this.admini = this.listaEmpleados.filter((emple) => emple.tipodescuento?.toLowerCase().includes("ADMINISTRATIVO".toLowerCase())).length;
        this.gerente = this.listaEmpleados.filter((emple) => emple.tipodescuento?.toLowerCase().includes("GERENCIA".toLowerCase())).length;
        this.tienda = this.listaEmpleados.filter((emple) => emple.tipodescuento?.toLowerCase().includes("TIENDA".toLowerCase())).length;

        const empleadosPorEmpresa = this.listaEmpleados.reduce((acc, empleado) => {
          if (!acc[empleado.empresa]) {
            acc[empleado.empresa] = 1;
          }
          else {
            acc[empleado.empresa]++;
          }
          return acc;
        }, [] as any);

        const claves = Object.keys(empleadosPorEmpresa);
        claves.forEach(clave => {
          this.datachart.labels.push(clave);
          this.datachart.datasets[0].data.push(empleadosPorEmpresa[clave]);
        })
        console.log("Claves", claves);
        console.log("Chart", this.datachart.datasets[0].data);
      },
      error: (ex) => { }
    });

  }

  setTrafficPeriod(value: string): void {
  }
}
