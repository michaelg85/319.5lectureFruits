//imnports
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from './db/conn.mjs';
import fruitRoutes from './routes/fruitRoutes.mjs'

//setups
const app = express();
dotenv.config();
let PORT = process.env.PORT || 3001;

//DB connection
connectDB()

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

//routes
app.use('/fruits', fruitRoutes)

//listener
app.listen(PORT, () => {
  console.log(`Server runinng on PORT: ${PORT}`);
});
