import {MongoMemoryServer} from "mongodb-memory-server";
import mongoose from "mongoose";
import { app } from "../app";
import request from "supertest"

declare global {
       var signin: () => Promise<string[]>;
  }
  
let mongo: any;
beforeAll(async () => {
    process.env.JWT_KEY = "asashuu"
    mongo = new MongoMemoryServer()
    await mongo.start();

    const mongoUri = await mongo.getUri();
    await mongoose.connect(mongoUri, {});
})

beforeAll(async () => {
    const collections = await mongoose.connection.db.collections();

    for(let coll of collections) {
        await coll.deleteMany({})
    }
})

afterAll(async () => {
    await mongo.stop()
    await mongoose.connection.close();
})


global.signin = async () => {
    const email  = "testuser@gmail.com";
    const password = "123456";

    const res = await request(app)
        .post("/api/user/signup")
        .send({
            email, password
        })
   return res
}
