import {ApiProperty} from "@nestjs/swagger";

export class WeatherCoordinate {
    @ApiProperty({name: 'Longitude', type: Number})
    lon: number;

    @ApiProperty({name: 'Latitude', type: Number})
    lat: number;
}