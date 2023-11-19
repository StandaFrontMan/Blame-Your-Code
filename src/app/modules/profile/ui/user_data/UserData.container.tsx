"use client";

import { useEffect, useState } from "react";
import UserDataView from "./UserData.view";
import { User } from "../../domain/User";
import { useInjection } from "@/app/core/hooks/UseInjection";
import React from "react";

export default function UserDataContainer() {
  const { getUserDataRepository } = useInjection();

  const userDataRepository = getUserDataRepository();

  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    const fetchData = async () => {
      const user = await userDataRepository.getUserData();
      setUser(user);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <UserDataView user={user} />;
}
