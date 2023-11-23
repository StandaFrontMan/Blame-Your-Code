export interface UserDataChangeRepository {
  updateUserData(pole: string | undefined, type: string): Promise<void>;
}
