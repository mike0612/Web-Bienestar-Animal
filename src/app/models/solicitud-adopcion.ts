import { Mascota } from './mascota';

export class SolicitudAdopcion {
    constructor(
        public id: number,
        public status: string,
        public mascota: Mascota,
        public datosPersonales?: any,
        public respuestas?: any
    ) {}
}