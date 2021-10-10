import {WeatherCoordinate} from "./WeatherCoordinate";
import {WeatherItem} from "./WeatherItem";
import {WeatherMain} from "./WeatherMain";
import {WeatherWind} from "./WeatherWind";
import {WeatherCloud} from "./WeatherCloud";
import {WeatherSys} from "./WeatherSys";
import {ApiProperty} from "@nestjs/swagger";

export class WeatherRoot {
    @ApiProperty({type: WeatherCoordinate})
    coord: WeatherCoordinate;

    @ApiProperty({type: [WeatherItem]})
    weather: Array<WeatherItem>;

    @ApiProperty({type: String})
    base: string;

    @ApiProperty({type: WeatherMain})
    main: WeatherMain;

    @ApiProperty({type: Number})
    visibility: number;

    @ApiProperty({type: WeatherWind})
    wind: WeatherWind;

    @ApiProperty({type: WeatherCloud})
    clouds: WeatherCloud;

    @ApiProperty({type: Number})
    dt: number;

    @ApiProperty({type: WeatherSys})
    sys: WeatherSys;

    @ApiProperty({type: Number})
    timezone: number;

    @ApiProperty({type: Number})
    id: number;

    @ApiProperty({type: String})
    name: string;

    @ApiProperty({type: Number})
    cod: number;
}