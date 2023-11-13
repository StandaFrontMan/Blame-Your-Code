import { UserRepositoryImpl } from "../../data/user_credentials/UserRepositoryImpl";

export default async function DiUser(token: string) {
  const repository = new UserRepositoryImpl();

  try {
    const user = await repository.getUserData(token);
    return user;
  } catch (error) {
    console.log("Error from DiUser", error);
  }
}
