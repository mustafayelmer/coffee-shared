import {ApiProperty} from "@nestjs/swagger";
import {HttpException} from "@nestjs/common";
import { Response } from 'express';

export class ErrorResponse {
    @ApiProperty({description: 'Error name', type: String, required: false})
    name: string;

    @ApiProperty({description: 'Error message', type: String})
    message: string;

    @ApiProperty({description: 'Track id', type: String})
    track: string;

    @ApiProperty({description: 'timestamp', type: String})
    timestamp: string;

    static directError(res: Response, err: Error|HttpException, status = 499): void {
        if (err instanceof HttpException) {
            status = err?.getStatus();
        }
        const track = Math.floor(Math.random() * 100000000);
        res.statusMessage = err?.name ?? 'Unknown error';
        res
            .status(status)
            .json({
                name: err.name,
                message: err.message,
                timestamp: new Date().toISOString(),
                track: track.toString(32),
            });
    }
}