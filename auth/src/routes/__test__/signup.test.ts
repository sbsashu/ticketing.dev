import request from "supertest";

import { app } from "../../app";

it("returns a 201 on successful signup", async () => {
    return request(app)
        .post("/api/user/signup")
        .send({
            email: "test@gmail.com",
            password: "asasss"
        })
        .expect(201);
})

it("returns a 400 on email is not valid signup", async () => {
    return request(app)
        .post("/api/user/signup")
        .send({
            email: "test",
            password: "asasss"
        })
        .expect(400);
})

it("returns a 400 on password is required signup", async () => {
    return request(app)
        .post("/api/user/signup")
        .send({
            email: "test@gmail.com",
            password: ""
        })
        .expect(400);
})
it("returns a 400 on email or password is missing", async () => {
    await request(app)
        .post("/api/user/signup")
        .send({
            password: "asasss"
        })
        .expect(400);
    await request(app)
    .post("/api/user/signup")
    .send({
        email: "test@gmail.com",
    })
    .expect(400);
})

it("disallows duplicates user signup", async () => {
    await request(app)
            .post("/api/user/signup")
            .send({
                email: "assasa@gmail.com",
                password: "ashuasast"
            })
            .expect(201);

    await request(app)
            .post("/api/user/signup")
            .send({
                email: "tessasast@gmail.com",
                password: "ashut"
            })
            .expect(201);
})

it("check cokies avilablity", async () => {
const resp =  await request(app)
        .post("/api/user/signup")
        .send({
            email: "tesasast@gmail.com",
            password: 'ashasasu'
        })
        .expect(201);
    expect(resp.get("Set-Cookie")).toBeDefined();
})