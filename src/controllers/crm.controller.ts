import type {Usuario, Rol} from '../models/interfaces';




export class CRMController {
    // Propiedades
    private usuariosDelCentro: Usuario[] = [];
    private readonly CLAVESTORAGE = "school-crm-usuarios";


 // Constructor
    constructor(private version: string ) {
        this.usuariosDelCentro = [
    { id: 1, nombre: 'Ana Martínez', rol: 'profesor', activo: true, tieneCoche: 'Toyota' },
    { id: 2, nombre: 'Carlos Soler', rol: 'alumno', activo: true },
    { id: 3, nombre: 'Lucía Gómez', rol: 'admin', activo: false },
    { id: 4, nombre: 'María López', rol: 'profesor', activo: true },
    { id: 5, nombre: 'Javier Torres', rol: 'alumno', activo: false },
    { id: 6, nombre: 'Laura Fernández', rol: 'alumno', activo: true },
];
    }
    // Métodos: Es la funcion de ayer, que estaba en counter, convertida en un método o habilidad de la clase CRMController
    filtrarUsuariosPorRol ( rolBuscado: Rol,): Usuario[] {
       // Usamos this para referirnos a la propiedad de esta misma clase
       return this.usuariosDelCentro.filter(usuario => usuario.rol === rolBuscado );
    }
    actulizaVersion(nuevaVersion: string): void {
    this.version = nuevaVersion;  
}
    verVersion(): string {
    return this.version;
}


 public agregarUsuario(nuevoUsuario: Usuario): void {
    const existeUsuario = this.usuariosDelCentro.some(
      (usuario) => usuario.id === nuevoUsuario.id
    );

    if (existeUsuario) {
      console.log(`El usuario con el ID`+nuevoUsuario.id+"ya existe");
      return;
    }

   
    this.usuariosDelCentro.push(nuevoUsuario);
    this.guardarEnDisco();
  }
private guardarEnDisco(): void {
  localStorage.setItem(this.CLAVESTORAGE), JSON.stringify(this.usuariosDelCentro);
}
}
