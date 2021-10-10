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
    @ApiProperty({name: 'Coordinate object', type: WeatherCoordinate})
    coord: WeatherCoordinate;

    @ApiProperty({name: 'Weather items', type: [WeatherItem]})
    weather: Array<WeatherItem>;

    @ApiProperty({name: 'Internal parameter', type: String})
    base: string;

    @ApiProperty({name: 'Main object', type: WeatherMain})
    main: WeatherMain;

    @ApiProperty({name: 'Average visibility, #metres', type: Number})
    visibility: number;

    @ApiProperty({name: 'Wind object', type: WeatherWind})
    wind: WeatherWind;

    @ApiProperty({name: 'Rain object', type: WeatherWind})
    rain: WeatherRain;

    @ApiProperty({name: 'Snow object', type: WeatherWind})
    snow: WeatherSnow;

    @ApiProperty({name: 'Cloudiness object', type: WeatherCloud})
    clouds: WeatherCloud;

    @ApiProperty({name: 'Time of data calculation, UTC', type: Number})
    dt: number;

    @ApiProperty({name: 'System object', type: WeatherSys})
    sys: WeatherSys;

    @ApiProperty({name: 'Shift in seconds from UTC', type: Number})
    timezone: number;

    @ApiProperty({name: 'City Id', type: Number})
    id: number;

    @ApiProperty({name: 'City name', type: String})
    name: string;

    @ApiProperty({name: 'Code', type: Number})
    cod: number;
}