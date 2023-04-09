import { ValidationError } from "express-validator";
import { CustomError } from "./custom-error";
export class RequestValidationError extends CustomError {
    statusCode = 400
    constructor(public errors: ValidationError[]) {
        super()
        // only because we are extending our built in class
        Object.setPrototypeOf(this, RequestValidationError.prototype)
    }

    serialzerErrors() {
        return this.errors.map((err => {
            return {message: err.msg, field: err.param}
        }))
    }
}