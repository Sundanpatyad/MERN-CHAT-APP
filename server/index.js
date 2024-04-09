import express from 'express';
import  Connection  from './database/db.js';
import route from './routes/routes.js';
import bodyParser from 'body-parser';
import cors from 'cors'
const app = express();
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
app.use('/', route)
Connection();



const PORT = 8000;

app.listen(PORT , ()=> console.log("Server Is Running", PORT))