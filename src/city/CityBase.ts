import {ApiProperty} from "@nestjs/swagger";
import {CityAble} from "./CityAble";

export class CityBase implements CityAble {
    @ApiProperty({type: String, format: 'uuid'})
    id: string;

    @ApiProperty({type: String})
    name: string;
}