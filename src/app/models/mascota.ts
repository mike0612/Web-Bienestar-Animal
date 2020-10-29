import { Usuario } from './usuario';

export class Mascota {
    constructor (
        public id: number,
        public nombre: string,
        public raza: string,
        public sexo: string,
        public status: string,
        public tipo: string,
        public edad: string,
        public foto?: any,
        public propietario?: Usuario,
        public interesados?: string[]
    ) {}
}
