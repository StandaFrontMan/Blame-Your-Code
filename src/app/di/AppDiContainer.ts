import { UserRepositoryImpl } from "../modules/Auth/data/user_credentials/UserRepositoryImpl";
import { UserRepository } from "../modules/Auth/domain/user_credentials/UserRepository";
import { DiContainer } from "./DiContainer";

export class AppDiContainer implements DiContainer {
  getUserRepository(): UserRepository {
    return new UserRepositoryImpl();
  }
}
