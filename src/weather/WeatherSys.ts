import {ApiProperty} from "@nestjs/swagger";

export class WeatherSys {
    @ApiProperty({type: Number})
    type: number;

    @ApiProperty({type: Number})
    id: number;

    @ApiProperty({type: String})
    country: string;

    @ApiProperty({type: Number})
    sunrise: number;

    @ApiProperty({type: Number})
    sunset: number;
}