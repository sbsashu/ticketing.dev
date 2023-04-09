import { CustomError } from "./custom-error";

export class UnauthrizedRequestError extends CustomError {
    statusCode = 401;
    constructor() {
        super()

        Object.setPrototypeOf(this, UnauthrizedRequestError.prototype);
    }
    serialzerErrors() {
        return [{message: "Not authrized"}]
    }
}