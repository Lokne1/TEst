"use client";
import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img
            src="https://img.pikbest.com/best/video_preview_img/2309/9211443.jpg!bw700"
            alt="Logo"
            width="50"
            height="50"
          />
        </div>
        <nav className={styles.navbar}>
          <ul>
            <li><Link href="/">Trang chủ</Link></li>
            <li><Link href="/auction">Đấu giá</Link></li>
            <li><Link href="/about">Giới thiệu</Link></li>
            <li><Link href="/profile">Profile</Link></li>
            <div className={styles.buttonLogin}>
            <li><Link href="/login&register/dangnhap">Đăng ký/Đăng nhập</Link></li>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
