declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_APIKEY: string,
      NEXT_PUBLIC_AUTHDOMAIN: string,
      NEXT_PUBLIC_PROJECTID: string,
      NEXT_PUBLIC_STORAGEBUCKET: string,
      NEXT_PUBLIC_MESSAGINGSENDERID: string,
      NEXT_PUBLIC_APPID: string
    }
  }
}

export {}