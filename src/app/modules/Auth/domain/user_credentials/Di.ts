import { UserRepositoryImpl } from "../../data/user_credentials/UserRepositoryImpl";

export default async function Di(email: string, password: string) {
  const repository = new UserRepositoryImpl();
  try {
    const token: string = await repository.getToken(email, password);
    return token;
  } catch (error) {
    console.log("Error from Di", error);
  }
}
