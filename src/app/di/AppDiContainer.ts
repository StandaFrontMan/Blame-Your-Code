import { AuthRepositoryImpl } from "../modules/Auth/data/user_credentials/AuthRepositoryImpl";
import { AuthRepository } from "../modules/Auth/domain/user_credentials/AuthRepository";
import { UserDataRepositoryImpl } from "../modules/repositories/user_data_repository/data/UserDataRepositoryImpl";
import { UserDataRepository } from "../modules/repositories/user_data_repository/domain/UserDataRepository";

import { DiContainer } from "./DiContainer";

export class AppDiContainer implements DiContainer {
  getAuthRepository(): AuthRepository {
    return new AuthRepositoryImpl();
  }

  getUserDataRepository(): UserDataRepository {
    return new UserDataRepositoryImpl();
  }
}
