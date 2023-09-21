import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosListComponent } from './empleados-list/empleados-list.component';
import { EmpleadoDetailComponent } from './empleado-detail/empleado-detail.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Empleados'
    },
    children: [
      {
        path: 'empleados-list',
        component: EmpleadosListComponent,
        data: {
          title: 'Lista de Empleados'
        },
        children: []
      },
      {
        path: 'empleado-detail',
        component: EmpleadoDetailComponent,
        data: {
          title: 'Empleado'
        }
      },
      {
        path: 'empleado-detail/:id',
        component: EmpleadoDetailComponent,
        data: {
          title: 'Empleado'
        }
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadosRoutingModule { }
