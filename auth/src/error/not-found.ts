import { CustomError } from "./custom-error";

export class NotFoundError extends CustomError {
    statusCode = 404

    constructor() {
        super();

        Object.setPrototypeOf(this, NotFoundError.prototype)
    }

    serialzerErrors() {
        return [{message: 'Not found'}]
    }
}