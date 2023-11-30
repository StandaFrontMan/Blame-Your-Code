import { AuthRepository } from "../../domain/user_credentials/AuthRepository";
import { TokenEntity } from "./TokenEntity";

export class AuthRepositoryImpl implements AuthRepository {
  async getToken(email: string, password: string) {
    if (email === null || password === null) {
      throw new Error("Email and Password are required");
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE}Account/SignIn`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    );
    const data: TokenEntity = await response.json();
    this.saveTokenToLocalStorage(data.token);
  }

  private async saveTokenToLocalStorage(token: string) {
    localStorage.setItem("token", JSON.stringify(token));
  }
}
