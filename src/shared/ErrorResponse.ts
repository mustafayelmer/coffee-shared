import {ApiProperty} from "@nestjs/swagger";

export class ErrorResponse {
    @ApiProperty({description: 'Error name', type: String})
    name: string;

    @ApiProperty({description: 'Error message', type: String})
    message: string;

    @ApiProperty({description: 'Track id', type: String})
    track: string;
}