import { CustomError } from "./custom-error";

export  class BadRequestError extends CustomError {
     statusCode = 400;

    constructor(public message: string){
        super();

        Object.setPrototypeOf(this, BadRequestError.prototype)
    }

    serialzerErrors() {
        return [{message: this.message}]
    }
}