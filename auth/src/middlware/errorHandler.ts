import { Request, Response, NextFunction } from "express";
import { CustomError } from "../error/custom-error";

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {

    if(err instanceof CustomError) {  
        return res.status(err.statusCode).send({errors: err.serialzerErrors()})
    }
    
    res.status(400).send({
        errors: [{message: "Something went wrong"}]
    })
}