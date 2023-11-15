import { UserRepositoryImpl } from "../modules/Auth/data/user_credentials/UserRepositoryImpl";
import { UserRepository } from "../modules/Auth/domain/user_credentials/UserRepository";
import { UserDataRepositoryImpl } from "../modules/repositories/user_data_repository/data/UserDataRepositoryImpl";
import { UserDataRepository } from "../modules/repositories/user_data_repository/domain/UserDataRepository";

import { DiContainer } from "./DiContainer";

export class AppDiContainer implements DiContainer {
  getUserRepository(): UserRepository {
    return new UserRepositoryImpl();
  }

  getUserDataRepository(): UserDataRepository {
    return new UserDataRepositoryImpl();
  }
}
