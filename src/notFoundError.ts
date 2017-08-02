import { BaseError } from './baseError';

export class NotFoundError extends BaseError {
    constructor(message: string = 'Not Found', status: number = 404) {
        // Calling parent constructor of base Error class.
        super(message, status, 'not_found_error');

        // Capturing stack trace, excluding constructor call from it.
        Error.captureStackTrace(this, this.constructor);

        // Saving class name in the property of our custom error as a shortcut.
        this.name = this.constructor.name;
    }
}
