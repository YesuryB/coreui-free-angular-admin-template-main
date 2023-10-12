import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Empleado } from '../interfaces/empleado';
import { Estado } from '../interfaces/estado';
import { Descuento } from '../interfaces/descuento';
import { LogsTransactions } from '../interfaces/logs-transactions';
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private enpoint: string = environment.endpoint;
  private apiUrl: string = this.enpoint + "Empleados";
  constructor(private http: HttpClient) { }
  getList(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.apiUrl)
  }
  getEstadoList(): Observable<Estado[]> {
    return this.http.get<Estado[]>(`${this.enpoint}Estados`)
  }
  getLogList(): Observable<LogsTransactions[]> {
    return this.http.get<LogsTransactions[]>(`${this.enpoint}Empleados/log`)
  }
  getEmpleado(id:number): Observable<Empleado> {
    return this.http.get<Empleado>(`${this.enpoint}Empleados/id?id=${id}`)
  }
  getDescuentoList(): Observable<Descuento[]> {
    return this.http.get<Descuento[]>(`${this.enpoint}Descuentos`)
  }
  add(request: Empleado): Observable<Empleado> {
    return this.http.post<Empleado>(`${this.apiUrl}/add`, request)
  }
  update(request: Empleado): Observable<Empleado> {
    return this.http.post<Empleado>(`${this.apiUrl}/update`, request)
  }
}
