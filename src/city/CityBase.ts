import {ApiProperty} from "@nestjs/swagger";
import {City} from "./City";

export class CityBase implements City {
    @ApiProperty({description: 'City id', type: String, format: 'uuid'})
    id: string;

    @ApiProperty({description: 'City name', type: String})
    name: string;
}