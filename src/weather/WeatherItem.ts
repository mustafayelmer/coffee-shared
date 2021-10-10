import {ApiProperty} from "@nestjs/swagger";

export class WeatherItem {
    @ApiProperty({type: Number})
    id: number;

    @ApiProperty({type: String})
    main: string;

    @ApiProperty({type: String})
    description: string;

    @ApiProperty({type: String})
    icon: string;
}