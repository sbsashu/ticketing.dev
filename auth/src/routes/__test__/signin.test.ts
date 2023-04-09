import request from "supertest";

import { app } from "../../app";

it("do not allows signin with email id password that does not exist", async () => {
    await request(app)
        .post("/api/user/signin")
        .send({
            email: "user@example.com",
            password: "password"
        })
        .expect(400)
})

it("do not allows user to login with email id password that does exist", async () => {
    await request(app)
        .post("/api/user/signup")
        .send({
            email: "user2@example.com",
            password: "password"
        })
        .expect(201);

    await request(app)
        .post("/api/user/signin")
        .send({
            email: "user3@example.com",
            password: "asass"
        })
        .expect(400)
})

it("allows user to login with email id password that does exist", async () => {
    await request(app)
        .post("/api/user/signup")
        .send({
            email: "user4@example.com",
            password: "password"
        })
        .expect(201);

   const resp = await request(app)
        .post("/api/user/signin")
        .send({
            email: "user4@example.com",
            password: "password"
        })
        .expect(201)
    expect(resp.get("Set-Cookie")).toBeDefined();
})