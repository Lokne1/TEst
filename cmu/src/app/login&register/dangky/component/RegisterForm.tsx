"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./RegisterForm.model.css"; 

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    otp: "",
    agreeTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };
  

  return (
    <div className="register-container">
      <div className="register-box">
        <h1 className="register-title">ĐẤU GIÁ</h1>
        <h2 className="register-subtitle">ĐỒ CỔ</h2>
        <div className="register-group">
          <p className="text-white">Bạn đã có tài khoản?{" "}
        <Link href="/login&register/dangnhap">Đăng nhập ngay</Link> </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div>
              <label className="text-white">Họ tên</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="input-field"
                required
              />
            </div>
            <div>
              <label className="text-white">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input-field"
                required
              />
            </div>
          </div>

          <div className="input-group mt-4">
            <div>
              <label className="text-white">Mật khẩu</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="input-field"
                required
              />
            </div>
            <div>
              <label className="text-white">Nhập lại mật khẩu</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="input-field"
                required
              />
            </div>
          </div>

          <div className="input-group mt-4">
            <div>
              <label className="text-white">Số điện thoại</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="input-field"
                required
              />
            </div>
          </div>

          <div className="checkbox-container">
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              required
            />
            <span className="text-white text-sm">Tôi đồng ý với các điều khoản</span>
          </div>

          <button type="submit" className="register-btn mt-4">
            Đăng ký ngay
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
