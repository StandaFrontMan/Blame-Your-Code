"use client";

import React from "react";
import RegistrationFormView from "./RegistrationForm.view";
import { useInjection } from "@/app/core/hooks/UseInjection";

export default function RegistrationFormContainer() {
  const { getUserRegistrationRepository } = useInjection();

  const userRegistrationRepository = getUserRegistrationRepository();

  const [formData, setFormData] = React.useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    userRegistrationRepository.signUpUser(
      formData.username,
      formData.email,
      formData.password,
      formData.confirmPassword
    );
  };

  return (
    <RegistrationFormView
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}
