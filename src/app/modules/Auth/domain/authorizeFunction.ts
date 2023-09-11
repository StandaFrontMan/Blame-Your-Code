import { User } from "next-auth";

export async function authorizeFunction(credentials: Record<"password" | "email", string> | undefined): Promise<User | null> {
    
    if (!credentials?.email || !credentials.password) { // Проверка пустого
        return null
    }

    try {
        const response = await fetch(`${process.env.SERVER_URL_BASE}/user/${credentials.email}/${credentials.password}`); // обращение к серверу

        const data = await response.json();
        console.log(data);
        
        
        return data as User; // возврат объекта как тип User
    } catch (error) {
        return null
    }
}