export class SolicitudPerdido {
    constructor(
        public id: number,
        public nombre: string,
        public correo: string,
        public telefono: string,
        public mensaje: string
    ) {}
}