export class Empleado {
    id?: number;
    documento?: string;
    nombre?: string;
    estatus?: string;
    idpais?: number;
    idestado?: number;
    idtipodescuento?: number;
    tipodescuento?: string;
    correoelectronico?: string;
    clave?: string;
    empresa: string = "";
    codigopayday?:string;
    fechaingreso?: string;
}
