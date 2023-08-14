import { Session } from "next-auth";

export interface ISession {
    session: Session | null
}
