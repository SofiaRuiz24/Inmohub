import React from "react";
import { AuthTemplate } from "../components/templates";
import { SignupForm } from "../components/organisms";

export const SignupPage: React.FC = () => {
  return (
    <AuthTemplate>
      <SignupForm />
    </AuthTemplate>
  );
};
