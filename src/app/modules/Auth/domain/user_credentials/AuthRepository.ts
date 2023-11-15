export interface AuthRepository {
  getToken(email: string, password: string): Promise<void>;
}
