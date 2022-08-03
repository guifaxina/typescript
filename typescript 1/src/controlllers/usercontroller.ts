import { Request, Response } from 'express';

class userController {
    findAll(request: Request, response: Response) {
        response.send("Olá")
    }
}

export default new userController();