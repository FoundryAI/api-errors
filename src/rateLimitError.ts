import { BaseError } from './baseError';

export class RateLimitError extends BaseError {
    constructor(message: string = 'Too many requests', status: number = 429) {
        // Calling parent constructor of base Error class.
        super(message, status, 'rate_limit_error');

        // Capturing stack trace, excluding constructor call from it.
        Error.captureStackTrace(this, this.constructor);

        // Saving class name in the property of our custom error as a shortcut.
        this.name = this.constructor.name;
    }
}
