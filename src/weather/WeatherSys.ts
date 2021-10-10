import {ApiProperty} from "@nestjs/swagger";

export class WeatherSys {
    @ApiProperty({name: '', type: Number})
    type: number;

    @ApiProperty({name: '', type: Number})
    id: number;

    @ApiProperty({name: 'Country code, ISO 2-letters', type: String})
    country: string;

    @ApiProperty({name: 'Sunrise time, UTC', type: Number})
    sunrise: number;

    @ApiProperty({name: 'Sunset time, UTC', type: Number})
    sunset: number;
}