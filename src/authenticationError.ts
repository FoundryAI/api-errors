import { BaseError } from './baseError';

export class AuthenticationError extends BaseError {
    constructor (message: string = 'Unauthorized', status: number = 401) {
        // Calling parent constructor of base Error class.
        super(message, status, 'authentication_error');

        // Capturing stack trace, excluding constructor call from it.
        Error.captureStackTrace(this, this.constructor);

        // Saving class name in the property of our custom error as a shortcut.
        this.name = this.constructor.name;
    }
}
