"use client";

import { useEffect, useState } from "react";
import { IUser } from "../../data/IUser";
import UserDataView from "./UserData.view";
import { diContainer } from "@/app/page";

export default function UserDataContainer() {
  const [user, setUser] = useState<IUser | null>();
  const repository = diContainer.getUserDataRepository();

  useEffect(() => {
    const fetchData = async () => {
      const user = await repository.getUserData();
      setUser(user);
    };
    fetchData();
  }, [repository]);

  return <UserDataView user={user} />;
}
