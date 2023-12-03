import { UserDataChangeRepository } from "../domain/UserDataChangeRepository";
import { NewUserEntity } from "./RepositoryResponseEntity";

export class UserDataChangeRepositoryImpl implements UserDataChangeRepository {
  async updateUserData(pole: string, type: string) {
    if (pole === null) {
      throw new Error("Pole is Empty");
    }

    const token = this.getTokenFromLocalStorage();

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE}Account/Update`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          [type]: pole,
        }),
      }
    );
  }

  private getTokenFromLocalStorage(): string | null {
    const token = localStorage.getItem("token");
    return token !== null ? JSON.parse(token) : null;
  }
}
