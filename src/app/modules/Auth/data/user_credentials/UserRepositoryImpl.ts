import { IToken } from "../../domain/user_credentials/IToken";
import { IUser } from "../../domain/user_credentials/IUser";
import { UserRepository } from "../../domain/user_credentials/UserRepository";

export class UserRepositoryImpl implements UserRepository {
  async getToken(
    email: string | undefined,
    password: string | undefined
  ): Promise<IToken> {
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
          // Преобразуйте объект в JSON-строку
          email: email,
          password: password,
        }),
      }
    );
    const data = await response.json();

    console.log("token", data);

    return data;
  }

  async getUserData(token: any): Promise<IUser> {
    const response = await fetch(
      `https://59k4pfj3-8080.euw.devtunnels.ms/api/Account/Me`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();
    console.log("artem", data);

    return data;
  }
}
