import  request from "supertest";

import { app } from "../../app";

it("get current user", async () => {
    const cookie = await global.signin()

    const res2 = await request(app)
        .get("/api/get/currentuser")
        .set("Cookie", cookie)
        .send()
        .expect(200)

    expect(res2.body.currentUser.email).toEqual("next@example.com")
    
})

it("current user not set", async () => {
    const cookie = await global.signin()

    const res2 = await request(app)
        .get("/api/get/currentuser")
        .set("Cookie", cookie)
        .send()
        .expect(200)

    expect(res2.body.currentUser.email).toEqual(null)
    
})