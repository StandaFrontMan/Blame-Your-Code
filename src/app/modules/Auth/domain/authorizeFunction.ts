import { User } from "next-auth";
import { users } from "../infrastructure/users";

export async function authorizeFunction(credentials: Record<"password" | "email", string> | undefined): Promise<User | null> {
    
    if (!credentials?.email || !credentials.password) {
        return null
    }

    const currentUser = users.find(user => user.email === credentials.email);

    if (currentUser && currentUser.password === credentials.password) {
        const {password, ...userwithiutPassword} = currentUser;

        return userwithiutPassword as User;
    }

    return null;
}