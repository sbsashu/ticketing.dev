import express, { json } from "express";
import "express-async-errors";
import cookieSession from "cookie-session";
import { getCurrentUser } from "./routes/current-user";
import cors from "cors";
import { signIn } from "./routes/singin";
import { signOut } from "./routes/sign-out";
import { signUp } from "./routes/signup";
import { errorHandler } from "./middlware/errorHandler";
import { NotFoundError } from "./error/not-found";
const app = express();

app.use(cors());
app.set("trust proxy", true);

app.use(json());
app.use(cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test'
}))
app.use(getCurrentUser);
app.use(signIn);
app.use(signOut);
app.use(signUp);
app.all("*", async (req, res) => {
    throw new NotFoundError();
});
app.use(errorHandler);

export {app}