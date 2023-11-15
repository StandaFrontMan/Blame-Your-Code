import { UserDataRepository } from "../domain/UserDataRepository";
import { TokenEntity } from "./TokenEntity";

export class UserDataRepositoryImpl implements UserDataRepository {
  async getUserData(): Promise<TokenEntity> {
    const token = this.getTokenFromLocalStorage();

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
    console.log("userData from new repo", data);

    return data;
  }

  private getTokenFromLocalStorage(): Promise<TokenEntity> {
    return JSON.parse(localStorage.getItem("token") || "[]");
  }
}
