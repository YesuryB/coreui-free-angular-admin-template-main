import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Descuento } from 'src/app/interfaces/descuento';
import { Empleado } from 'src/app/interfaces/empleado';
import { Estado } from 'src/app/interfaces/estado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-empleado-detail',
  templateUrl: './empleado-detail.component.html',
  styleUrls: ['./empleado-detail.component.scss']
})
export class EmpleadoDetailComponent implements OnInit {
  empleadoForm: FormGroup;
  listaEstados: Estado[] = [];
  listaDescuentos: Descuento[] = [];
  empleado: Empleado = new Empleado();
  constructor(private router: ActivatedRoute, private router1: Router, private _empleadoService: EmpleadoService, private formBuilder: FormBuilder) {
    this.empleadoForm = this.formBuilder.group({
      id: [''], // Define los campos y valores iniciales del formulario
      nombre: [''],
      documento: [''],
      estatus: [''],
      tipodescuento: [''],
      correoelectronico: [''],
      empresa: [''],
      // Agrega más campos según sea necesario
    });
  }

  ngOnInit(): void {
    this.getEmpleado();
  }

  getEmpleado(): void {
    const id = Number(this.router.snapshot.paramMap.get('id'));
    console.log("Esto tiene idempleado: ", id)
    this._empleadoService.getEmpleado(id)
      .subscribe({
        next: (empleado) => {
          this.empleadoForm.setValue({
            id: empleado.id,
            nombre: empleado.nombre,
            documento: empleado.documento,
            estatus: empleado.idestado,
            tipodescuento: empleado.idtipodescuento,
            correoelectronico: empleado.correoelectronico,
            empresa: empleado.empresa,
            // Asigna más campos según corresponda
          });
          console.log("Esto tiene formgroup: ", empleado)
        }
      });
    this._empleadoService.getEstadoList().subscribe({
      next: (data) => {
        this.listaEstados = data;
      }
    });
    this._empleadoService.getDescuentoList().subscribe({
      next: (data1) => {
        this.listaDescuentos = data1;
      }
    });
  }
  guardarEmpleado(): void {
    this.empleado.id = this.empleadoForm.value.id,
    this.empleado.documento = this.empleadoForm.value.documento,
    this.empleado.nombre = this.empleadoForm.value.nombre,
    this.empleado.correoelectronico = this.empleadoForm.value.nombre,
    this.empleado.idestado = this.empleadoForm.value.estatus,
    this.empleado.idtipodescuento = this.empleadoForm.value.tipodescuento,
    this.empleado.empresa = this.empleadoForm.value.empresa,
    this.empleado.idpais = 1,
    this.empleado.fechaingreso = "2023-01-01"
    console.log("Eso tiene empleado", this.empleado)
    this._empleadoService.add(this.empleado).subscribe();
    this.router1.navigate(['/empleados/empleados-List']);
  }
}
