import { UserDataRepository } from "../domain/UserDataRepository";
import { UserEntity } from "./UserEntity";

export class UserDataRepositoryImpl implements UserDataRepository {
  async getUserData(): Promise<UserEntity> {
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
    return data;
  }

  private getTokenFromLocalStorage(): Promise<UserEntity> {
    return JSON.parse(localStorage.getItem("token") || "[]");
  }
}
