import {ApiProperty} from "@nestjs/swagger";

export class WeatherCoordinate {
    @ApiProperty({description: 'Longitude', type: Number})
    lon: number;

    @ApiProperty({description: 'Latitude', type: Number})
    lat: number;
}