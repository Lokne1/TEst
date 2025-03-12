"use client";
import React, { useState } from "react";
import styles from "../about.module.css";
import LegalPolicy from "./LegalPolicy";
import Terms from "./Terms";
import Guide from "./Guide";

const About: React.FC = () => {
  // State để quản lý việc hiển thị thông tin chi tiết cho từng mục
  const [showLegalPolicy, setShowLegalPolicy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showGuide, setShowGuide] = useState(false);

  return (
    <div className={styles["about-container"]}>
      <h2 className={styles["about-header"]}>Giới thiệu về trang web</h2>
      <div className={styles["about-box"]}>
      <p className={styles["about-text"]}>
        <strong>Trang web đấu giá trực tuyến</strong> của chúng tôi là nền tảng tiên tiến, mang lại trải nghiệm đấu giá đơn giản, an toàn và minh bạch cho người dùng. 
        Với mục tiêu cung cấp một không gian trực tuyến để người dùng có thể dễ dàng tham gia vào các phiên đấu giá, chúng tôi đã xây dựng một hệ thống đấu giá trực tuyến, nơi mà các sản phẩm, đặc biệt là đồ cổ và các sản phẩm độc đáo, được giao dịch với giá cả hợp lý.
      </p>
      <p className={styles["about-text"]}>
        Hệ thống của chúng tôi đảm bảo mọi giao dịch đều được thực hiện công bằng, minh bạch, giúp người dùng yên tâm tham gia đấu giá. 
        Các phiên đấu giá trên trang web được tổ chức một cách nghiêm túc và chuyên nghiệp, mang đến những trải nghiệm mua sắm trực tuyến thú vị và tiện lợi.
      </p>
      <p className={styles["about-text"]}>
        Chúng tôi cam kết bảo vệ quyền lợi của người dùng, đảm bảo tính bảo mật cao trong mọi giao dịch và cung cấp các công cụ hỗ trợ người dùng hiệu quả. 
        Chúng tôi luôn lắng nghe phản hồi từ người dùng và không ngừng cải thiện hệ thống để mang đến những tính năng tối ưu hơn trong tương lai.
      </p>
      </div>
      <div className={styles["about-image"]}>
        <img src="https://placekitten.com/400/300" alt="About Us" />
      </div>

      {/* Các nút bấm */}
      <div className={styles["button-container"]}>
        <button onClick={() => setShowLegalPolicy(!showLegalPolicy)} className={styles["info-button"]}>
          Chính sách pháp lý
        </button>
        <button onClick={() => setShowTerms(!showTerms)} className={styles["info-button"]}>
          Điều khoản sử dụng
        </button>
        <button onClick={() => setShowGuide(!showGuide)} className={styles["info-button"]}>
          Hướng dẫn sử dụng web
        </button>
      </div>

      {/* Hiển thị thông tin khi nhấn vào các nút */}
      {showLegalPolicy && <LegalPolicy />}
      {showTerms && <Terms />}
      {showGuide && <Guide />}
    </div>
  );
};

export default About;
