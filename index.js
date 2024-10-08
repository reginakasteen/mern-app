import express from 'express';
import mongoose from 'mongoose';
import { registerValidation, loginValidation, postCreationValidation } from './validations.js';
import checkAuth from './utils/checkAuth.js';
import * as UserController from './controllers/UserController.js';
import * as PostController from './controllers/PostController.js';


mongoose.connect('mongodb+srv://albinakostyuchenko03:eGwsJb2HLXoAj9Ly@mycluster.twzar.mongodb.net/blog?retryWrites=true&w=majority&appName=MyCluster')
.then(() => console.log('Database connected'))
.catch((err) => console.log('Database error: ', err));

const app = express();
app.use(express.json());

app.post('/auth/register', registerValidation, UserController.register);
app.post('/auth/login', loginValidation, UserController.login);
app.get('/auth/me', checkAuth, UserController.getMe);

app.get('/posts', PostController.getAll);
app.get('/posts/:id', PostController.getOne);
app.post('/posts', checkAuth, postCreationValidation, PostController.create);
app.patch('/posts/:id', checkAuth, PostController.update);
app.delete('/posts/:id', checkAuth, PostController.remove);


app.listen(3553, (err) => {
    if(err) {
        return console.log(err);
    }
    console.log('Server is working');
});