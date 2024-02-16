const supertest = require("supertest");
const app = require("../index");
const request = supertest(app);

//supertest
describe("Test user Routes", () => {
  it("test post route", async () => {
    const res = await request
      .post("/users")
      .send({ userName: "amira", password: "123" });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(
      jasmine.objectContaining({ keyValue: { userName: "amira" } })
    );
  });
  it("test get route", async () => {
    const res = await request.get("/users");
    expect(res.body).toEqual(jasmine.any(Array));
  });

  
  it("should create a new user", async () => {
    const userData = { userName: "hazem", password: "123456" };
    const res = await request.post("/users").send(userData);
    expect(res.status).toBe(200);
    expect(res.body).toEqual(jasmine.objectContaining({ userName: "hazem" }));
  });

  it("should fail to log in a user with invalid credentials", async () => {
    const userData = { userName: "ayUser", password: "auUser" };
    const res = await request.post("/users/login").send(userData);
    expect(res.status).toBe(401); 
  });
});
