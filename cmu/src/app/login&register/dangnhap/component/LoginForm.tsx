import { Button } from "antd";
import React, { useState } from "react";
import Link from "next/link";
import InputField from "./InputField";
import "./LoginForm.model.css";
import { useRouter } from "next/router"; // Điều hướng sau khi đăng nhập

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter(); // Sử dụng để điều hướng trang

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(""); // Xóa thông báo trước đó

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token); // Lưu token vào localStorage
        setMessage("Đăng nhập thành công!");
        router.push("/dashboard"); // Chuyển hướng sau khi đăng nhập
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage("Lỗi kết nối đến server");
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
        {message && <p className="error-message">{message}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
