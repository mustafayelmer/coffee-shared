import {ApiProperty} from "@nestjs/swagger";

export class DeleteResponse {
    @ApiProperty({description: 'Deleted id', type: String})
    id: string;
}