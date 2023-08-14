"use client";

import { useSession } from "next-auth/react";
import HeaderContainer from "../HeaderContainer/page";

export default function HeaderView() {

    const { data: session} = useSession();

    console.log(session);

    return (
            <HeaderContainer session={session}/>
    )
}