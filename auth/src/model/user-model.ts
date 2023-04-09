import mongoose from "mongoose";
import { Password } from "../service/password";

interface UserAiff {
    email: string,
    password: string
}

interface UserModel extends mongoose.Model<UserDoc> {
    build(atti: UserAiff): UserDoc;
}

//An interface that describe the properfies
// that a User Model has
interface UserDoc extends mongoose.Document {
    email: string,
    password: string
 }
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},{
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id,
            delete ret._id,
            delete ret.password,
            delete ret.__v
        }
    }
})

UserSchema.pre('save', async function(done) {
    if(this.isModified('password')) {
        const hashed = await Password.toHash(this.get('password'));
        this.set('password', hashed);
    }
    done();
})

UserSchema.statics.build = (atti: UserAiff) => {
    return new User(atti)
}
const User = mongoose.model<UserDoc, UserModel>("user", UserSchema);


export { User }