import { Injectable, NotFoundException } from '@nestjs/common';
import { Pelicula } from 'src/class/pelicula';
import { v4 } from 'uuid';
import { agregarPeliculaDto, datosActualizadosDto } from 'src/dto/peliculas.dto';

@Injectable()
export class PeliculasService {
    
    private peliculas: Pelicula[] = [
        {
            id: '21bu1',
            titulo: 'The Northman',
            actores: ['Alexander Skarsgård','Anya Taylor-Joy','Nicole Kidman','Claes Bang'],
            generos: ['aventura','fantasía','acción'],
            sinopsis: 'El joven príncipe Amleth esta a punto de convertirse en un hombre cuando su padre es brutalmente asesinado por su tío, quien además secuestra a su madre. Dos décadas después, Amleth es un vikingo en una misión para rescatar a su madre, matar a su tío y vengar a su padre.',
            portada: 'portada-the-northman',
            duracion: 137,
            fecha: '21-04-2022',
        },
        {
            id: '78g8sd',
            titulo: 'Interstellar',
            actores: ['Matthew McConaughey','Anne Hathaway','Jessica Chastain'],
            generos: ['aventura','drama','ciencia ficción'],
            sinopsis: 'Narra las aventuras de un grupo de exploradores que hacen uso de un agujero de gusano recientemente descubierto para superar las limitaciones de los viajes espaciales tripulados y vencer las inmensas distancias que tiene un viaje interestelar.',
            portada: 'portada-interstellar',
            duracion: 169,
            fecha: '11/06/2014',
        }
    ];
    
    verPeliculas(): Pelicula[] {
        return this.peliculas;
    };

    agregarPelicula(agregarPeliculaDto: agregarPeliculaDto):Pelicula{
        const nuevaPelicula: Pelicula = new Pelicula(
            v4(),
            agregarPeliculaDto.titulo,
            agregarPeliculaDto.actores,
            agregarPeliculaDto.generos,
            agregarPeliculaDto.sinopsis,
            agregarPeliculaDto.portada,
            agregarPeliculaDto.duracion,
            agregarPeliculaDto.fecha,
        );
        this.peliculas.push(nuevaPelicula);
        return nuevaPelicula;
    };

    seleccionarPelicula(id:string): Pelicula{
        const pelicula = this.peliculas.find((pelicula) => pelicula.id === id);
        if (!pelicula) {
            throw new NotFoundException();
          };
        return pelicula;
    };

    actualizarPelicula(id:string, datosActualizados: datosActualizadosDto): Pelicula{
        const pelicula = this.seleccionarPelicula(id);
        const nuevaPelicula = Object.assign(pelicula, datosActualizados);
        this.peliculas = this.peliculas.map((pelicula) => (pelicula.id === id ? nuevaPelicula : pelicula));
        return nuevaPelicula;
    };

    eliminarPelicula(id:string){
        this.seleccionarPelicula(id);
        this.peliculas = this.peliculas.filter(pelicula => pelicula.id !== id);
    };
}
