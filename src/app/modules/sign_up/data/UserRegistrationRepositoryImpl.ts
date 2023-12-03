import { UserRegistrationRepository } from "../domain/UserRegistrationRepository";

export class UserRegistrationRepositoryImpl
  implements UserRegistrationRepository
{
  async signUpUser(
    username: string,
    email: string,
    password: string,
    confirmPassword: string
  ): Promise<void> {
    if (
      username === null &&
      email === null &&
      password === null &&
      confirmPassword === null
    ) {
      throw new Error("At least one parameter is not specified");
    }
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE}Account/SignUp`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
          confirmPassword: confirmPassword,
        }),
      }
    );
    const data = await response.json();
    console.log(data);

    return data;
  }
}
