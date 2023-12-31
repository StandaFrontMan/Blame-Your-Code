"use client";

import React from "react";
import { UserEntity } from "../../../domain/UserEntity";
import { useInjection } from "@/app/core/hooks/UseInjection";
import UsernameChangeFieldView from "./UsernameChangeField.view";

export default function UsernameChangeFieldContanier() {
  const [curUserData, setCurUserData] = React.useState<UserEntity | null>();
  const [newUserData, setNewUserData] = React.useState<string>();
  const type: string = "username";

  const { updateUserDataChangeRepository, getUserDataRepository } =
    useInjection();
  const userDataChangeRepository = updateUserDataChangeRepository();
  const userDataRepository = getUserDataRepository();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewUserData(event.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await userDataChangeRepository.updateUserData(newUserData, type);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      const userData = await userDataRepository.getUserData();
      setCurUserData(userData);
    };
    fetchData();
  }, []);
  return (
    <UsernameChangeFieldView
      curUserData={curUserData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}
