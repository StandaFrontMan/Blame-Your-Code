"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { User } from "@/app/modules/sign_in/domain/User";
import { useInjection } from "@/app/core/hooks/UseInjection";
import SignInFormView from "./SignInForm.view";

export default function SignInFormContainer() {
  const { getAuthRepository, getUserDataRepository } = useInjection();

  const authRepository = getAuthRepository();
  const userDataRepository = getUserDataRepository();

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

    await authRepository.getToken(formData.email, formData.password);
    const userData: User = await userDataRepository.getUserData();
    console.log(userData);

    router.push("/pages/profilePage");
  };

  return (
    <SignInFormView
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}
