import {HttpStatus} from "@nestjs/common";
import {BaseError} from "./BaseError";

export class UnauthorizedError extends BaseError {
    constructor() {
        super(`You must use api-key to use it`, HttpStatus.UNAUTHORIZED);
    }
}