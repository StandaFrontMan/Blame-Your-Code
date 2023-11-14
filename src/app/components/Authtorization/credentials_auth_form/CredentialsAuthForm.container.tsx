"use client";

import CredentialsAuthFormView from "./CredentialsAuthForm.view";
import React from "react";
import { diContainer } from "@/app/page";

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

  const handleSubmit = (e: any) => {
    e.preventDefault();

    repository.getToken(formData.email, formData.password).then((token) => {
      repository.getUserData(token).then((userData) => {
        console.log(userData); // end
      });
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
