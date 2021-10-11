import {ApiProperty} from "@nestjs/swagger";

export class WeatherSys {
    @ApiProperty({description: '', type: Number})
    type: number;

    @ApiProperty({description: '', type: Number})
    id: number;

    @ApiProperty({description: 'Country code, ISO 2-letters', type: String})
    country: string;

    @ApiProperty({description: 'Sunrise time, UTC', type: Number})
    sunrise: number;

    @ApiProperty({description: 'Sunset time, UTC', type: Number})
    sunset: number;
}