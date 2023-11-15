import { UserRepositoryImpl } from "../modules/Auth/data/user_credentials/UserRepositoryImpl";
import { UserRepository } from "../modules/Auth/domain/user_credentials/UserRepository";
import { UserDataRepositoryImpl } from "../modules/profile/data/UserDataRepositoryImpl";
import { UserDataRepository } from "../modules/profile/domain/UserDataRepository";
import { DiContainer } from "./DiContainer";

export class AppDiContainer implements DiContainer {
  getUserRepository(): UserRepository {
    return new UserRepositoryImpl();
  }

  getUserDataRepository(): UserDataRepository {
    return new UserDataRepositoryImpl();
  }
}
