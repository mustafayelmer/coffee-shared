import {HttpException, HttpStatus} from "@nestjs/common";

export class NotFoundError extends HttpException {
    constructor(path: string) {
        super(`Path was not found: ${path}`, HttpStatus.NOT_FOUND);
    }
}