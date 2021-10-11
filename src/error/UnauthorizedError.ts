import {HttpException, HttpStatus} from "@nestjs/common";

export class UnauthorizedError extends HttpException {
    constructor() {
        super(`You must use api-key to use it`, HttpStatus.UNAUTHORIZED);
    }
}