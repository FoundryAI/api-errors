export class BaseError extends Error {

    public status: number;
    public type: string;

    constructor(message: string, status: number, type: string) {
        // Calling parent constructor of base Error class.
        super(message);

        // Typing for easy reference
        this.type = type;

        // Store the HTTP status code
        this.status = status;
    }
}
