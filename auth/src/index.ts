
import mongoose from "mongoose"
import {app} from "./app";
const start = async () => {
    if(!process.env.JWT_KEY) {
        throw new Error("Secret is not accessible");
    }
    try {   
        await mongoose.connect("mongodb://auth-mongo-srv:27017/auth")
        console.log("connected sucessfully")
    } catch (err) {
        console.error(err);
    }
}

app.listen(3000, () => {
    console.log("Listening on port  no 3000");
})
start();