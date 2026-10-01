//controllers
import type { Asistencia, Sancion, RegistroHorario, EstadoAsistencia, TipoSancion, FranjaHoraria } from '../models/interfaces';
import { StorageService } from '../services/storage.service';

export class CRMController {
    // Inicialización de los almacenes persistentes
    private asistenciaStorage = new StorageService<Asistencia>('crm_asistencias');
    private sancionesStorage = new StorageService<Sancion>('crm_sanciones');
    private horariosStorage = new StorageService<RegistroHorario>('crm_horarios');

    /**
     * Registra una falta, retraso o asistencia en el sistema de forma asíncrona.
     */
    public async registrarAsistencia(alumnoId: string, profesorId: string, franja: FranjaHoraria, estado: EstadoAsistencia): Promise<boolean> {
        // Simulación de retraso de red
        await new Promise((resolve) => setTimeout(resolve, 300));

        const nuevaAsistencia: Asistencia = {
            id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
            alumnoId: alumnoId,
            profesorId: profesorId,
            fecha: new Date().toISOString().split('T')[0],
            franja,
            estado: estado
        };

        this.asistenciaStorage.add(nuevaAsistencia);
        return true;
    }

    /**
     * Registra una sanción disciplinaria.
     */
    public async registrarSancion(alumnoId: string, profesorId: string, tipo: TipoSancion, descripcion: string): Promise<void> {
        // TODO: Implementar lógica de inserción asíncrona.
        throw new Error('Método no implementado');
    }

    /**
     * VERIFICACIÓN CRÍTICA: Comprueba si un profesor ya tiene una clase asignada en el mismo día y hora.
     * Devuelve true si hay conflicto (el profesor está duplicado) o false si está libre.
     */
    public async comprobarConflictoProfesor(profesorId: string, dia: string, franja: string): Promise<boolean> {
        // TODO: Recuperar los horarios y utilizar métodos de array (.some, .filter, etc.) 
        // para buscar coincidencias exactas.
        throw new Error('Método no implementado');
    }

    /**
     * Genera un informe resumido con el total de faltas y retrasos de un alumno concreto.
     */
    public async obtenerInformeAlumno(alumnoId: string): Promise<{ faltas: number; retrasos: number; sanciones: number }> {
        // TODO: Filtrar asistencias y sanciones del alumno para devolver el objeto con los contadores.
        throw new Error('Método no implementado');
    }
}
