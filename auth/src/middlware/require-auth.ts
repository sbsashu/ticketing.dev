import { Request, Response, NextFunction } from "express";
import { UnauthrizedRequestError } from "../error/unauthrized-request";

export const RequireAuth = (req: Request, res: Response, next: NextFunction) => {
    if(!req.currentUser) {
        throw new UnauthrizedRequestError();
    }
    next()
}