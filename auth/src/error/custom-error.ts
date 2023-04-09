export abstract class CustomError extends Error {
    abstract statusCode: number;

    constructor(){
        super();

        Object.setPrototypeOf(this, CustomError.prototype)
    }

    abstract serialzerErrors(): {message: string, field?: string}[]

}