export class ReqRes {
    statusCode: number;
    error: string;
    message: string;
    token: string;
    refreshToken: string;
    expirationTime: string;
    name: string;
    email: string;
    role: string;
    password: string;
   
    constructor(
      statusCode: number,
      error: string,
      message: string,
      token: string,
      refreshToken: string,
      expirationTime: string,
      name: string,
      email: string,
      role: string,
      password: string
    ) {
      this.statusCode = statusCode;
      this.error = error;
      this.message = message;
      this.token = token;
      this.refreshToken = refreshToken;
      this.expirationTime = expirationTime;
      this.name = name;
      this.email = email;
      this.role = role;
      this.password = password;
    }
  }