import { BaseError } from './baseError';

export class ForbiddenError extends BaseError {
    constructor(message: string = 'Forbidden', status: number = 403) {
        // Calling parent constructor of base Error class.
        super(message, status, 'forbidden_error');

        // Capturing stack trace, excluding constructor call from it.
        Error.captureStackTrace(this, this.constructor);

        // Saving class name in the property of our custom error as a shortcut.
        this.name = this.constructor.name;
    }
}
