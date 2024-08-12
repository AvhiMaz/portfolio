// src/app.ts
import express from "express";
import cors from "cors";
import counterRoutes from "./routes/counter";
import axios from "axios";
import { config } from "./config/config";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", counterRoutes);

const url = config.backendUrl as string;
const interval = 30000;

function reloadWebsite() {
  axios
    .get(url)
    .then((response) => {
      console.log(
        `Reloaded at ${new Date().toISOString()}: Status Code ${
          response.status
        }`
      );
    })
    .catch((error) => {
      console.error(
        `Error reloading at ${new Date().toISOString()}:`,
        error.message
      );
    });
}

setInterval(reloadWebsite, interval);

export default app;
