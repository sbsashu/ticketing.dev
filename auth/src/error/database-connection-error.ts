export class DataBaseError extends Error {
    statusCode = 500;
    reason = "Error in database connection";
    constructor() {
        super()
        // only because we are extending our built in class
        Object.setPrototypeOf(this, DataBaseError.prototype)
    }
    serialzerError() {
        return {errors: [{message: this.reason}]}
    }
}