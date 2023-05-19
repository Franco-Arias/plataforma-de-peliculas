import { IsNotEmpty, IsNumber, IsString, MinLength, IsArray, IsOptional } from "class-validator";

export class agregarPeliculaDto{
    @IsString()
    @IsNotEmpty()
    titulo: string;

    @IsArray()
    @IsNotEmpty()
    @IsString({each: true})
    actores: string[];

    @IsArray()
    @IsNotEmpty()
    @IsString({each: true})
    generos: string[];

    @IsString()
    @IsNotEmpty()
    sinopsis: string;

    @IsString()
    @IsNotEmpty()
    portada: string;

    @IsNumber()
    duracion: number;

    @IsString()
    @IsNotEmpty()
    fecha: string;
}

export class datosActualizadosDto{
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    titulo?: string;

    @IsArray()
    @IsNotEmpty()
    @IsString({each: true})
    @IsOptional()
    actores?: string[];

    @IsArray()
    @IsNotEmpty()
    @IsString({each: true})
    @IsOptional()
    generos?: string[];

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    sinopsis?: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    portada?: string;

    @IsNumber()
    @IsOptional()
    duracion?: number;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    fecha?: string;
}