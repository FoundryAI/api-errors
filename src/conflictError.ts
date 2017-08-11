import { BaseError } from './baseError';

export class ConflictError extends BaseError {
    constructor(message: string = 'Conflict', status: number = 409) {
        // Calling parent constructor of base Error class.
        super(message, status, 'conflict_error');

        // Capturing stack trace, excluding constructor call from it.
        Error.captureStackTrace(this, this.constructor);

        // Saving class name in the property of our custom error as a shortcut.
        this.name = this.constructor.name;
    }
}
