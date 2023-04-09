import request from "supertest"
import { app } from "../../app"

it("delete cookies session after logout the user",async () => {
    await request(app)
        .post("/api/user/signup")
        .send({
            email: "ashutosh@gmail.com",
            password: "password"
        })
        .expect(201)
    
    const response = await request(app)
                            .get("/api/user/signout")
                            .send({})
                            .expect(200);

        expect(response.get("Set-Cookie")[0]).toEqual('session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; httponly')
})