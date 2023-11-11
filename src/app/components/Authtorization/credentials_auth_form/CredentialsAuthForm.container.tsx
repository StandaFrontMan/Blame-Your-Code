"use client";

import { useRouter } from "next/router";
import { FormEventHandler } from "react";
import CredentialsAuthFormView from "./CredentialsAuthForm.view";
import { UserRepositoryImpl } from "@/app/modules/Auth/data/user_credentials/UserRepositoryImpl";
import React from "react";

export default function CredentialsAuthFormContainer() {
  const repository = new UserRepositoryImpl();

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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // В этой функции вы можете использовать данные из formData
    console.log("Form data submitted:", formData);

    const token = repository.getToken(formData.email, formData.password);
    console.log(token);
    // const user = repository.getUserData(token);
    // console.log(user);
  };

  return (
    <CredentialsAuthFormView
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}
