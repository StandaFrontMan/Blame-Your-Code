"use client";

import CredentialsAuthFormView from "./CredentialsAuthForm.view";
import React from "react";
import { diContainer } from "@/app/page";
import { IUser } from "@/app/modules/Auth/domain/user_credentials/IUser";
import { useRouter } from "next/navigation";

export default function CredentialsAuthFormContainer() {
  const authRepository = diContainer.getAuthRepository();
  const userDataRepository = diContainer.getUserDataRepository();

  const router = useRouter();

  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    authRepository.getToken(formData.email, formData.password);
    const userData: IUser = await userDataRepository.getUserData();
    console.log(userData);

    router.push("/pages/profilePage");
  };

  return (
    <CredentialsAuthFormView
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}
