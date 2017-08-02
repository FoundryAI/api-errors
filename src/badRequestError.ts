import { BaseError } from './baseError';

// Copied from https://github.com/lodash/lodash/blob/4.0.1-npm-packages/lodash.head/index.js
function _head(array) {
    return (array && array.length) ? array[0] : undefined;
}

export interface ValidationErrorError {
    field: String;
    location: String;
    messages: Array<string>;
    types: Array<string>;
}

export interface ValidationError {
    status: String;
    statusText: String;
    errors: Array<ValidationErrorError>;
}

export class BadRequestError extends BaseError {
    public static createFromValidationError(validationError: ValidationError) {
        const primaryError = <ValidationErrorError>_head(validationError.errors);
        const errorMessage = _head(primaryError.messages);
        return new BadRequestError(errorMessage);
    }

    constructor(message: string = 'Bad Request', status: number = 400) {
        // Calling parent constructor of base Error class.
        super(message, status, 'bad_request_error');

        // Capturing stack trace, excluding constructor call from it.
        Error.captureStackTrace(this, this.constructor);

        // Saving class name in the property of our custom error as a shortcut.
        this.name = this.constructor.name;
    }
}
