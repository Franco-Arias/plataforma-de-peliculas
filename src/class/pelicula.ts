export class Pelicula {
    id: string;
    titulo: string;
    actores: string[];
    generos: string[];
    sinopsis: string;
    portada: string;
    duracion: number;
    fecha: string;
    
    constructor(
        id: string,
        titulo: string,
        actores: string[],
        generos: string[],
        sinopsis: string,
        portada: string,
        duracion: number,
        fecha: string,
    ){
        this.id = id;
        this.titulo = titulo;
        this.actores = actores;
        this.generos = generos;
        this.sinopsis = sinopsis;
        this.portada = portada;
        this.duracion = duracion;
        this.fecha = fecha;
    }
};