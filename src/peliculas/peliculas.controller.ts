import { Body, Controller, Delete, Get, Param, Post, Patch } from '@nestjs/common';
import { PeliculasService } from './peliculas.service';
import { agregarPeliculaDto, datosActualizadosDto } from 'src/dto/peliculas.dto';

@Controller('peliculas')
export class PeliculasController {
    constructor(private peliculasService: PeliculasService){};
    @Get()
    verPeliculas(){
        return this.peliculasService.verPeliculas();
    };

    @Post()
    agregarPelicula(@Body() agregarPeliculaDto: agregarPeliculaDto){
        return this.peliculasService.agregarPelicula(agregarPeliculaDto);
    };

    @Delete(':id')
    eliminarPelicula(@Param('id') id: string){
        this.peliculasService.eliminarPelicula(id);
    };

    @Patch(':id')
    actualizarPelicula(@Param('id') id: string, @Body() datosActualizados: datosActualizadosDto){
        return this.peliculasService.actualizarPelicula(id, datosActualizados);
    };
};