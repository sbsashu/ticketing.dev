import experes, {Request, Response} from 'express';
import { body } from 'express-validator';
import { BadRequestError } from '../error/bad-request-error';
import jwt from "jsonwebtoken";

import { validateRequest } from '../middlware/validate-request';
import { User } from '../model/user-model';
const router = experes.Router()

router.post("/api/user/signin",
body('email').isEmail().withMessage("Email is not valid"),
body("password").trim().notEmpty().withMessage("Password is not valid"),
validateRequest,
 async (req: Request, res: Response) => {
    const { email, password} = req.body;
    
    const exisitingUser = await User.findOne({email});
    if(!exisitingUser) {
        throw new BadRequestError("Invalid request error");
    }

    const jwtToken = jwt.sign({
        id: exisitingUser._id,
        email: exisitingUser.email 
    }, process.env.JWT_KEY!);

    req.session = {
        jwt: jwtToken
    }
    res.status(201).send(exisitingUser);

});

export {router as signIn};