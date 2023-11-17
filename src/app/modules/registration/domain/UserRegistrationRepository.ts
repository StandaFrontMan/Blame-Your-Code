export interface UserRegistrationRepository {
  signUpUser(
    username: string,
    email: string,
    password: string,
    confirmPassword: string
  ): Promise<void>;
}
