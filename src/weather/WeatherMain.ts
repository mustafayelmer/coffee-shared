import {ApiProperty} from "@nestjs/swagger";

export class WeatherMain {
    @ApiProperty({description: 'Temperature, #Celsius', type: Number})
    temp: number;

    @ApiProperty({description: 'Temperature for the human perception, #Celsius', type: Number})
    feels_like: number;

    @ApiProperty({description: 'Minimum temperature, #Celsius', type: Number})
    temp_min: number;

    @ApiProperty({description: 'Maximum temperature, #Celsius', type: Number})
    temp_max: number;

    @ApiProperty({description: 'Atmospheric pressure, #hPa', type: Number})
    pressure: number;

    @ApiProperty({description: 'Humidity, #percent', type: Number})
    humidity: number;

    @ApiProperty({description: 'Atmospheric pressure on the sea level, #hPa', type: Number})
    sea_level: number;

    @ApiProperty({description: 'Atmospheric pressure on the ground level, #hPa', type: Number})
    grnd_level: number;
}