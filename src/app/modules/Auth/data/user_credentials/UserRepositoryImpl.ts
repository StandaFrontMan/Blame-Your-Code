import { IToken } from "../../domain/user_credentials/IToken";
import { IUser } from "../../domain/user_credentials/IUser";
import { UserRepository } from "../../domain/user_credentials/UserRepository";

export class UserRepositoryImpl implements UserRepository {
  async getToken(email: string, password: string) {
    if (email === null || password === null) {
      throw new Error("Email and Password are required");
    }
    const response = await fetch(
      `https://59k4pfj3-8080.euw.devtunnels.ms/api/Account/SignIn`,
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
    const data = await response.json();
    this.saveTokenToLocalStorage(data.token);
  }

  async getUserData(): Promise<IUser> {
    const token = this.getTokenFromLocalStorage();

    console.log(token);

    if (token === null) {
      throw new Error("There is no token");
    }
    const response = await fetch(
      `https://59k4pfj3-8080.euw.devtunnels.ms/api/Account/Me`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  }

  getTokenFromLocalStorage(): Promise<IToken> {
    return JSON.parse(localStorage.getItem("token") || "[]");
  }

  private async saveTokenToLocalStorage(token: string) {
    localStorage.setItem("token", JSON.stringify(token));
  }
}
