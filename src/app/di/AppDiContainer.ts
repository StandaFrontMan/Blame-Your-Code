import { UserDataRepositoryImpl } from "../core/user/data/UserDataRepositoryImpl";
import { UserDataRepository } from "../core/user/domain/UserDataRepository";
import { PostSubmitionRepositoryImpl } from "../modules/create_post/data/PostSubmitionRepositoryImpl";
import { PostSubmitionRepository } from "../modules/create_post/domain/PostSubmitionRepository";
import { UserDataChangeRepositoryImpl } from "../modules/profile/user_settings/data/UserDataChangeRepositoryImpl";
import { UserDataChangeRepository } from "../modules/profile/user_settings/domain/UserDataChangeRepository";
import { AuthRepositoryImpl } from "../modules/sign_in/data/user_credentials/AuthRepositoryImpl";
import { AuthRepository } from "../modules/sign_in/domain/user_credentials/AuthRepository";
import { UserRegistrationRepositoryImpl } from "../modules/sign_up/data/UserRegistrationRepositoryImpl";
import { UserRegistrationRepository } from "../modules/sign_up/domain/UserRegistrationRepository";
import { DiContainer } from "./DiContainer";

export const appDiContainer: DiContainer = new (class implements DiContainer {
  getAuthRepository(): AuthRepository {
    return new AuthRepositoryImpl();
  }

  getUserDataRepository(): UserDataRepository {
    return new UserDataRepositoryImpl();
  }

  getUserRegistrationRepository(): UserRegistrationRepository {
    return new UserRegistrationRepositoryImpl();
  }

  updateUserDataChangeRepository(): UserDataChangeRepository {
    return new UserDataChangeRepositoryImpl();
  }

  createPostSubmitionRepository(): PostSubmitionRepository {
    return new PostSubmitionRepositoryImpl();
  }
})();
