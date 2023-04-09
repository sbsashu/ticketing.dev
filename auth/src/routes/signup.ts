import experes, {Request, Response} from 'express';
import {body} from "express-validator";
import { User } from '../model/user-model';
import { BadRequestError } from '../error/bad-request-error';
import Jwt from "jsonwebtoken";
import { validateRequest } from '../middlware/validate-request';

const router = experes.Router();

router.post("/api/user/signup", [
    body("email")
        .isEmail()
        .withMessage("Email is invalid"),
    body("password")
        .trim()
        .isLength({min: 4, max: 20})
        .withMessage("Password should be between 4 to 12 charchter")
],validateRequest, async (req: Request, res: Response) => {
   
    const { email, password } = req.body;
   
    const exisitingUser = await User.findOne({ email });
    
    if(exisitingUser) {
        throw new BadRequestError("Email is already used")
    }
    const user = User.build({email, password});
    
    await user.save();
    const jwtToken =  Jwt.sign({
        id: user.id,
        email: user.email
    }, process.env.JWT_KEY!);

    req.session = {jwt: jwtToken};

    res.status(201).send(user);

});

export {router as signUp};