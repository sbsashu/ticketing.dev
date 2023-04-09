import experes from 'express';
import { Request, Response } from 'express';
const router = experes.Router();

router.get("/api/user/signout", (req: Request, res: Response) => {
    req.session = null;
    res.send({})
});

export {router as signOut};