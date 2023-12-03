"use client";

import React from "react";
import EmailChangeFieldView from "./EmailChangeField.view";
import { useInjection } from "@/app/core/hooks/UseInjection";
import { UserEntity } from "../../../domain/UserEntity";

export default function EmailChangeFieldContanier() {
  const [curUserData, setCurUserData] = React.useState<UserEntity | null>();
  const [newUserData, setNewUserData] = React.useState<string>();
  const type: string = "email";

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
    <EmailChangeFieldView
      curUserData={curUserData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}
