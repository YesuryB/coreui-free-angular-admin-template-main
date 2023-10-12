import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosListComponent } from './empleados-list/empleados-list.component';
import { EmpleadoDetailComponent } from './empleado-detail/empleado-detail.component';
import { LogTransactionComponent } from './log-transaction/log-transaction.component';
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
        path: 'empleados-list/:estado',
        component: EmpleadosListComponent,
        data: {
          title: 'Lista de Empleados'
        }
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
      },
      {
        path: 'log-transaction',
        component: LogTransactionComponent,
        data: {
          title: 'Logs'
        }
      },
      {
        path: 'log-transaction/:documento',
        component: LogTransactionComponent,
        data: {
          title: 'Logs'
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
