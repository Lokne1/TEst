"use client";
import React from "react";
import RegisterForm from "../component/RegisterForm";
import Link from "next/link";
import "../globals.css"; // Import CSS toàn cục


const RegisterPage = () => {
  return (
    <div className="register-container">
      <h1 className="title">ĐĂNG KÝ</h1>
      

      <form className="register-form">
        <input type="text" placeholder="Tên đăng nhập" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Mật khẩu" required />
        <button type="submit">Đăng ký</button>
      </form>
    </div>
  );
};

export default RegisterPage;
