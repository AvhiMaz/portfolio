import { config as conf } from "dotenv";

conf();

const _config = {
  port: process.env.PORT || 5513,
  nodeEnv: process.env.NODE_ENV || "development",
  databaseUrl: process.env.MONGODB_URI,
};

export const config = Object.freeze(_config);
