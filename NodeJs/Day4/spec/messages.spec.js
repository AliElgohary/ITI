import supertest from "supertest";
import messageRouter from "../src/modules/messages/messsage.routes.js";

const request = supertest(messageRouter);

describe('Message Routes', () => {
  // it('should add a message successfully', async () => {
  //   const messageData = {
  
  //   };

  //   const response = await request
  //     .post('/messages')
  //     .send(messageData);

  //   expect(response.status).toBe(201); 
  
  // });

  it('should get all messages', async () => {
    const response = await request.get('/messages');

    expect(response.status).toBe(200); 
    expect(Array.isArray(response.body)).toBe(true);
  });
});
