import * as express from 'express';
import usercontroller from './controlllers/usercontroller';
const app = express();

function getUserName() {
    return "Guilherme Faxina";  
}

app.get('/', userController())

app.listen(3000, () => console.log("Server is listening"));