import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox } from "../atoms";
import { AuthInput } from "../molecules";

export const LoginForm: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleLogin = () => {
    // TODO: Implement login logic
    console.log("Login:", { email, password, remember });
  };

  return (
    <div className="w-300 max-w-lg bg-white rounded-2xl shadow-2xl p-10">
      {/* Logo Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center">
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {t("auth.login.title")}
      </h2>

      <div className="space-y-4">
        <AuthInput
          label={t("auth.login.emailLabel")}
          type="email"
          placeholder={t("auth.login.emailPlaceholder")}
          value={email}
          onChange={setEmail}
        />

        <AuthInput
          label={t("auth.login.passwordLabel")}
          type="password"
          placeholder={t("auth.login.passwordPlaceholder")}
          value={password}
          onChange={setPassword}
        />

        <div className="flex items-center justify-between">
          <Checkbox
            label={t("auth.login.rememberMe")}
            checked={remember}
            onChange={setRemember}
          />
          <button className="text-sm text-gray-500 hover:text-green-600 transition-colors">
            {t("auth.login.forgotPassword")}
          </button>
        </div>

        <Button
          variant="primary"
          size="lg"
          className="w-full"
          onClick={handleLogin}
        >
          {t("auth.login.button")}
        </Button>

        <div className="text-center text-sm">
          <span className="text-gray-500">{t("auth.login.noAccount")} </span>
          <button
            onClick={() => navigate("/signup")}
            className="font-semibold text-gray-900 hover:text-green-600 transition-colors"
          >
            {t("auth.login.signUpLink")}
          </button>
        </div>
      </div>
    </div>
  );
};
