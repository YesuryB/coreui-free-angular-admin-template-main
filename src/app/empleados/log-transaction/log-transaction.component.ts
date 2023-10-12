import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/interfaces/empleado';
import { LogsTransactions } from 'src/app/interfaces/logs-transactions';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-log-transaction',
  templateUrl: './log-transaction.component.html',
  styleUrls: ['./log-transaction.component.scss']
})
export class LogTransactionComponent implements OnInit {
  listaLogs: LogsTransactions[] = [];
  listaLogss: LogsTransactions[] = [];
  filtro: string = '';
  estado: string = '';
  logsForm: FormGroup;
  constructor(private router1: ActivatedRoute, private router: Router, private _empleadoService: EmpleadoService, private formBuilder: FormBuilder) {
    this.logsForm = new FormGroup({
      nombre: new FormControl(''),
      tienda: new FormControl(''),
    });
  }
  ObtenerLogTransactions() {
    this._empleadoService.getLogList().subscribe({
      next: (data) => {
        this.listaLogs = data;
        const documento = this.router1.snapshot.paramMap.get('cedula');
        //const descuento = this.router1.snapshot.paramMap.get('documento');
        if (documento) {
          console.log("Esto tiene descuento: ", documento)
          this.listaLogs = this.listaLogs.filter((emple) => emple.documento?.toLowerCase().includes(documento.toLowerCase()));
        }
        else {
          this.listaLogs = data;
        }

        this.listaLogss = data;
        this.listaLogss.filter((emple) => emple.nombre?.toLowerCase().includes(this.logsForm.value.nombre.toLowerCase()))
        console.log(this.listaLogss);
      },
      error: (ex) => { }
    });
  }
  filtrado(filtro: string) {
    console.log("Esto tiene filtro: ", filtro)
    //this.ObtenerListaEmpleados();

    this.listaLogs = this.listaLogss.filter((emple) => emple.nombre?.toLowerCase().includes(filtro.toLowerCase()))

    console.log(this.listaLogs);
  }
  filtradoE(filtroE: string) {
    console.log("Esto tiene filtro: ", filtroE)
    //this.ObtenerListaEmpleados();

    this.listaLogs = this.listaLogss.filter((emple) => emple.tienda?.toLowerCase().includes(filtroE.toLowerCase()))

    console.log(this.listaLogs);
  }
  ngOnInit(): void {
    this.logsForm.controls['nombre'].valueChanges.subscribe((name) => {
      this.filtrado(name);
    });
    this.logsForm.controls['tienda'].valueChanges.subscribe((tienda) => {
      this.filtradoE(tienda);
    });
    this.ObtenerLogTransactions()
  }
  /*ngOnChanges(): void {
    this.filtrado();
  }*/
}
