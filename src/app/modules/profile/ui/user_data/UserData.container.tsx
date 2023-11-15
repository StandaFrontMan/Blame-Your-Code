"use client";

import { useEffect, useState } from "react";
import UserDataView from "./UserData.view";
import { diContainer } from "@/app/page";
import { User } from "../../domain/User";

export default function UserDataContainer() {
  const [user, setUser] = useState<User | null>();
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
