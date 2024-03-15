declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV: 'PRODUCTION' | 'DEVELOPMENT' | 'STAGE';
        PORT: number;
        COMMON_RATE_LIMIT_MAX_REQUESTS: number;
        COMMON_RATE_LIMIT_WINDOW_MS:number
      }
    }
  }
  
  // If this file has no import/export statements (i.e. is a script)
  // convert it into a module by adding an empty export statement.
  export {}