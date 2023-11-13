"use client";

import { useRouter } from "next/router";
import { FormEventHandler } from "react";
import CredentialsAuthFormView from "./CredentialsAuthForm.view";
import { UserRepositoryImpl } from "@/app/modules/Auth/data/user_credentials/UserRepositoryImpl";
import React from "react";
import Di from "@/app/modules/Auth/domain/user_credentials/Di";
import DiUser from "@/app/modules/Auth/domain/user_credentials/DiUser";

export default function CredentialsAuthFormContainer() {
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

  const repository = new UserRepositoryImpl();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // В этой функции вы можете использовать данные из formData
    console.log("Form data submitted:", formData);

    Di(formData.email, formData.password).then((token) => {
      if (token) {
        DiUser(token).then((userData) => {
          console.log(userData);
        });
      } else {
        console.log("error in container");
      }
    });
  };

  return (
    <CredentialsAuthFormView
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}
