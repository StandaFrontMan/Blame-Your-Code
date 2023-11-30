"use client";

import React from "react";
import { useInjection } from "@/app/core/hooks/UseInjection";
import RegistrationFormView from "./RegistrationForm.view";
import { useRouter } from "next/navigation";

export default function RegistrationFormContainer() {
  const { getUserRegistrationRepository } = useInjection();

  const userRegistrationRepository = getUserRegistrationRepository();

  const router = useRouter();

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

  React.useEffect(() => {
    localStorage.setItem("token", ""); // delete JWT while user rendering Sign In Page
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    userRegistrationRepository.signUpUser(
      formData.username,
      formData.email,
      formData.password,
      formData.confirmPassword
    );

    router.push("/pages/profilePage");
  };

  return (
    <RegistrationFormView
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}
