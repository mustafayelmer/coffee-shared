import {ApiProperty} from "@nestjs/swagger";

export class WeatherItem {
    @ApiProperty({name: 'Condition id', type: Number})
    id: number;

    @ApiProperty({name: 'Group of weather parameters (Rain, Snow, Extreme etc.)', type: String})
    main: string;

    @ApiProperty({name: 'Weather condition within the group', type: String})
    description: string;

    @ApiProperty({name: 'Weather icon id', type: String})
    icon: string;
}