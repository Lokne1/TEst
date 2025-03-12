"use client";
import React, { useState } from "react";
import styles from "../about.module.css";

const Guide: React.FC = () => {
  return (
    <div className = {styles["guide-box"]}>
      <h3>Hướng dẫn sử dụng web</h3>
      <p>
        Để tham gia đấu giá trên trang web của chúng tôi, bạn cần tạo một tài khoản và đăng nhập. Sau khi đăng nhập, bạn có thể duyệt qua các phiên đấu giá đang diễn ra và chọn những sản phẩm mà bạn muốn tham gia đấu giá.
      </p>
      <p>
        Mỗi phiên đấu giá sẽ có thời gian bắt đầu và kết thúc rõ ràng. Bạn có thể đặt giá thầu bất kỳ lúc nào trong khoảng thời gian đó. 
        Chúng tôi cũng cung cấp tính năng thông báo khi có sự thay đổi về giá thầu, giúp bạn không bỏ lỡ cơ hội đấu giá.
      </p>
      <p>
        Để thanh toán, bạn có thể sử dụng các phương thức thanh toán trực tuyến mà chúng tôi hỗ trợ. Sau khi thắng đấu giá, bạn sẽ nhận được hướng dẫn về cách thanh toán và giao nhận sản phẩm.
      </p>
      <p>
        Nếu bạn gặp bất kỳ khó khăn nào trong quá trình sử dụng trang web, hãy tham khảo mục hỗ trợ hoặc liên hệ với chúng tôi qua các kênh hỗ trợ trực tuyến.
      </p>
    </div>
  );
};

export default Guide;
