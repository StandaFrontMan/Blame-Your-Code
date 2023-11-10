// /* eslint-disable react-hooks/rules-of-hooks */
// import { User } from "next-auth";
// import { UserRepositoryImpl } from "../data/user_credentials/UserRepositoryImpl";

// export async function authorizeFunction(
//   credentials: Record<"password" | "email", string> | undefined
// ): Promise<User | null> {
//   if (!credentials?.email || !credentials.password) {
//     // Проверка пустого
//     return null;
//   }

//   try {
//     const repo = new UserRepositoryImpl();

//     const token = repo.getToken(credentials.email, credentials.password);
//     console.log("token in auth", token);

//     return ;
//   } catch (error) {
//     return null;
//   }
// }
