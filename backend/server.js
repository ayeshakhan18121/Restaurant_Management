import app from "./app.js";
import dotenv from 'dotenv';

app.listen(process.env.PORT, ()=>{
    console.log(`Server Running On PORT ${process.env.PORT}`);
});