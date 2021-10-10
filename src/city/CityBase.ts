import {ApiProperty} from "@nestjs/swagger";
import {City} from "./City";

export class CityBase implements City {
    @ApiProperty({type: String, format: 'uuid'})
    id: string;

    @ApiProperty({type: String})
    name: string;
}