import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "../atoms";
import { AuthInput } from "../molecules";

export const SignupForm: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSignup = () => {
    // TODO: Implement signup logic
    console.log("Signup:", { name, email, password, acceptTerms });
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
        {t("auth.signup.title")}
      </h2>

      <div className="space-y-4">
        <AuthInput
          label={t("auth.signup.nameLabel")}
          type="text"
          placeholder={t("auth.signup.namePlaceholder")}
          value={name}
          onChange={setName}
        />

        <AuthInput
          label={t("auth.signup.emailLabel")}
          type="email"
          placeholder={t("auth.signup.emailPlaceholder")}
          value={email}
          onChange={setEmail}
        />

        <AuthInput
          label={t("auth.signup.passwordLabel")}
          type="password"
          placeholder={t("auth.signup.passwordPlaceholder")}
          value={password}
          onChange={setPassword}
        />

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            checked={acceptTerms}
            onChange={(e) => setAcceptTerms(e.target.checked)}
            className="w-4 h-4 mt-1 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
          />
          <label className="text-sm text-gray-600">
            {t("auth.signup.acceptTerms")}{" "}
            <a href="#" className="text-green-600 hover:underline">
              {t("auth.signup.termsLink")}
            </a>
          </label>
        </div>

        <Button
          variant="primary"
          size="lg"
          className="w-full"
          onClick={handleSignup}
        >
          {t("auth.signup.button")}
        </Button>

        <div className="text-center text-sm">
          <span className="text-gray-500">{t("auth.signup.hasAccount")} </span>
          <button
            onClick={() => navigate("/login")}
            className="font-semibold text-gray-900 hover:text-green-600 transition-colors"
          >
            {t("auth.signup.signInLink")}
          </button>
        </div>
      </div>
    </div>
  );
};
