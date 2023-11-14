"use client";

import CredentialsAuthFormView from "./CredentialsAuthForm.view";
import React from "react";
import { diContainer } from "@/app/page";
import { IUser } from "@/app/modules/Auth/domain/user_credentials/IUser";

export default function CredentialsAuthFormContainer() {
  const repository = diContainer.getUserRepository();

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

    repository.getToken(formData.email, formData.password);
    const userData: IUser = await repository.getUserData();
    console.log(userData);
  };

  return (
    <CredentialsAuthFormView
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}
