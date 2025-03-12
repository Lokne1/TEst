"use client";
import React from "react";
import LoginForm from "../component/LoginForm";
import Link from "next/link"; // Import Link từ Next.js
import "../../globals.css"; // Import CSS toàn cục

const LoginPage = () => {
  return (
    <div className="login-container">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
