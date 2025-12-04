import React from "react";
import { AuthTemplate } from "../components/templates";
import { LoginForm } from "../components/organisms";

export const LoginPage: React.FC = () => {
  return (
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  );
};
