import { authConfig } from "@/app/configs/auth";
import { Session, User, getServerSession } from "next-auth";

interface CustomSession extends Session {
    id: number; // Замените на тип, который соответствует вашим данным
  }

export async function authorizeFunction(credentials: Record<"password" | "email", string> | undefined): Promise<User | null> {

    const session: CustomSession | null = await getServerSession( authConfig );

    if (!credentials?.email || !credentials.password) { // Проверка пустого
        return null
    }

    try {
        const response = await fetch(`${process.env.SERVER_URL_BASE}/user/${credentials.email}/${credentials.password}`); // обращение к серверу

        const data = await response.json();

        if (data.id && session) {
            session.id = data.id; // Присвоить значение id сессии
        }

        return data as User; // возврат объекта как тип User
    } catch (error) {
        return null
    }
}