import {ApiProperty} from "@nestjs/swagger";
import {WeatherCoordinate} from "./WeatherCoordinate";
import {WeatherItem} from "./WeatherItem";
import {WeatherMain} from "./WeatherMain";
import {WeatherWind} from "./WeatherWind";
import {WeatherCloud} from "./WeatherCloud";
import {WeatherSys} from "./WeatherSys";
import {WeatherRain} from "./WeatherRain";
import {WeatherSnow} from "./WeatherSnow";

export class WeatherRoot {
    @ApiProperty({description: 'Coordinate object', type: WeatherCoordinate})
    coord: WeatherCoordinate;

    @ApiProperty({description: 'Weather items', type: [WeatherItem]})
    weather: Array<WeatherItem>;

    @ApiProperty({description: 'Internal parameter', type: String})
    base: string;

    @ApiProperty({description: 'Main object', type: WeatherMain})
    main: WeatherMain;

    @ApiProperty({description: 'Average visibility, #metres', type: Number})
    visibility: number;

    @ApiProperty({description: 'Wind object', type: WeatherWind})
    wind: WeatherWind;

    @ApiProperty({description: 'Rain object', type: WeatherWind})
    rain: WeatherRain;

    @ApiProperty({description: 'Snow object', type: WeatherWind})
    snow: WeatherSnow;

    @ApiProperty({description: 'Cloudiness object', type: WeatherCloud})
    clouds: WeatherCloud;

    @ApiProperty({description: 'Time of data calculation, UTC', type: Number})
    dt: number;

    @ApiProperty({description: 'System object', type: WeatherSys})
    sys: WeatherSys;

    @ApiProperty({description: 'Shift in seconds from UTC', type: Number})
    timezone: number;

    @ApiProperty({description: 'City Id', type: Number})
    id: number;

    @ApiProperty({description: 'City name', type: String})
    name: string;

    @ApiProperty({description: 'Code', type: Number})
    cod: number;
}