const express = require("express");
import router from './api/routes';
import { PORT } from './config'
import { connection } from "./config/database";
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();

app.use(cors({
  origin: '*'
}));
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", router)

connection();

app.listen(PORT, ()=>{
  console.log(`The Server is running on port ${PORT}`)
});