import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Response } from 'express';
import {ErrorResponse} from "./ErrorResponse";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(err: HttpException, host: ArgumentsHost): void {
        const ctx = host.switchToHttp();
        ErrorResponse.directError(ctx?.getResponse<Response>(), err);
    }
}