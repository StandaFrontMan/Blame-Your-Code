import { UserDataRepositoryImpl } from "../core/user/data/UserDataRepositoryImpl";
import { UserDataRepository } from "../core/user/domain/UserDataRepository";
import { AuthRepositoryImpl } from "../modules/Auth/data/user_credentials/AuthRepositoryImpl";
import { AuthRepository } from "../modules/Auth/domain/user_credentials/AuthRepository";
import { DiContainer } from "./DiContainer";

export const appDiContainer: DiContainer = new (class implements DiContainer {
  getAuthRepository(): AuthRepository {
    return new AuthRepositoryImpl();
  }

  getUserDataRepository(): UserDataRepository {
    return new UserDataRepositoryImpl();
  }
})();
