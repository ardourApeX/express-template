import dotenv from 'dotenv';

dotenv.config();

const ORIGINS= {
    PRODUCTION: [],
    DEVELOPMENT: ["http://localhost:3000"],
    STAGE: []
}
export const env =  {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  COMMON_RATE_LIMIT_MAX_REQUESTS: process.env.COMMON_RATE_LIMIT_MAX_REQUESTS,
  COMMON_RATE_LIMIT_WINDOW_MS: process.env.COMMON_RATE_LIMIT_WINDOW_MS,
  CORS_ORIGIN: ORIGINS[process.env.NODE_ENV]
}
