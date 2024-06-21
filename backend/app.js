// app.js
import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import { dbConnection } from "./database/dbConnection.js"; // Ensure this path is correct
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";

dotenv.config({ path: "./config.env" });

const app = express();

app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        methods: ["POST"],
        credentials: true
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/reservation", reservationRouter);

dbConnection();
app.use(errorMiddleware)

export default app;
