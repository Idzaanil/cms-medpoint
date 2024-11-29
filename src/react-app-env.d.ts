/// <reference types="react-scripts" />

declare global {
    // Deklarasikan tipe untuk environment variables
    namespace NodeJS {
      interface ProcessEnv {
        REACT_APP_SUPABASE_URL: string;
        REACT_APP_SUPABASE_ANON_KEY: string;
      }
    }
  }
  
  export {};
  