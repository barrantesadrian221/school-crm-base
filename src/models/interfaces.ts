// Definimos los roles permitidos en nuestro CRM escolar usando un Tipo Literal
 export type Rol = 'admin' | 'profesor' | 'alumno';


// Creamos la estructura estricta que debe tener cualquier usuario


export interface Usuario{
    id: number;
    nombre: string;
    rol: Rol;
    activo: boolean;
    tieneCoche?: string // almacenar marca del coche 
}
