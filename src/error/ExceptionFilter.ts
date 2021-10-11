import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(err: HttpException, host: ArgumentsHost): void {
        const ctx = host.switchToHttp();
        const response = ctx?.getResponse<Response>();
        const request = ctx?.getRequest<Request>();
        const status = err?.getStatus();
        const track = Math.floor(Math.random() * 100000000);
        response
            .status(status)
            .json({
                name: err.name,
                message: err.message,
                timestamp: new Date().toISOString(),
                track: track.toString(32),
                path: request?.url,
            });
    }
}