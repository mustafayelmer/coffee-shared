import {ApiProperty} from "@nestjs/swagger";

export class WeatherMain {
    @ApiProperty({name: 'Temperature, #Celsius', type: Number})
    temp: number;

    @ApiProperty({name: 'Temperature for the human perception, #Celsius', type: Number})
    feels_like: number;

    @ApiProperty({name: 'Minimum temperature, #Celsius', type: Number})
    temp_min: number;

    @ApiProperty({name: 'Maximum temperature, #Celsius', type: Number})
    temp_max: number;

    @ApiProperty({name: 'Atmospheric pressure, #hPa', type: Number})
    pressure: number;

    @ApiProperty({name: 'Humidity, #percent', type: Number})
    humidity: number;

    @ApiProperty({name: 'Atmospheric pressure on the sea level, #hPa', type: Number})
    sea_level: number;

    @ApiProperty({name: 'Atmospheric pressure on the ground level, #hPa', type: Number})
    grnd_level: number;
}