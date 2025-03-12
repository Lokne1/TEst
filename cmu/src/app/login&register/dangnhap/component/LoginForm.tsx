import { Button, Flex } from "antd";
import React, { useState } from "react";
import Link from "next/link"; 
import InputField from "./InputField";
import "./LoginForm.model.css";  
import axios from "axios";
import dynamic from "next/dynamic";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/v1/auth/login", { 
        email, 
        password 
      });
      console.log("Login success:", res.data);
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  return (
    <div className="login-container">
      <div className="logo">
        <img
          src="https://img.pikbest.com/best/video_preview_img/2309/9211443.jpg!bw700"
          alt="Logo"
          width="110"
          height="100"
        />
      </div>
      <h1 className="title">ĐẤU GIÁ</h1>
      <h2 className="subtitle">ĐỒ CỔ</h2>
      <p className="register-text">
        Bạn chưa có tài khoản?{" "}
        <Link href="/login&register/dangky">
          <strong>Đăng ký ngay</strong>
        </Link>
      </p>
      <form onSubmit={handleSubmit} className="login-form">
      <InputField
        label="Tên đăng nhập/email"
        type="email"
        name="email"  
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Nhập email của bạn"
      />
      <InputField
        label="Mật khẩu"
        type="password"
        name="password"  
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Nhập mật khẩu"
      />
        <Button type="primary" htmlType="submit" className="btn-login">
          Đăng nhập
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;