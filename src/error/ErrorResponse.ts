import {ApiProperty} from "@nestjs/swagger";

export class ErrorResponse {
    @ApiProperty({description: 'Error name', type: String, required: false})
    name: string;

    @ApiProperty({description: 'Error message', type: String})
    message: string;

    @ApiProperty({description: 'Track id', type: String})
    track: string;

    @ApiProperty({description: 'timestamp', type: String})
    timestamp: string;

    @ApiProperty({description: 'path', type: String, required: false})
    path: string;
}