import experes from 'express';
import { currentUser } from '../middlware/current-user';
import { RequireAuth } from '../middlware/require-auth';

const router = experes.Router();

router.get("/api/get/currentuser", currentUser, (req, res) => {
    res.send({currentUser: req.currentUser});
});

export {router as getCurrentUser};