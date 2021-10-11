import {ApiProperty} from "@nestjs/swagger";

export class WeatherItem {
    @ApiProperty({description: 'Condition id', type: Number})
    id: number;

    @ApiProperty({description: 'Group of weather parameters (Rain, Snow, Extreme etc.)', type: String})
    main: string;

    @ApiProperty({description: 'Weather condition within the group', type: String})
    description: string;

    @ApiProperty({description: 'Weather icon id', type: String})
    icon: string;
}