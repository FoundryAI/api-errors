import { BaseError } from './baseError';

export class InternalError extends BaseError {
    constructor(message: string = 'Internal Server Error', status: number = 500) {
        // Calling parent constructor of base Error class.
        super(message, status, 'internal_error');

        // Capturing stack trace, excluding constructor call from it.
        Error.captureStackTrace(this, this.constructor);

        // Saving class name in the property of our custom error as a shortcut.
        this.name = this.constructor.name;
    }
}
