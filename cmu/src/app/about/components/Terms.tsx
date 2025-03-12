import React from "react";
import styles from "../about.module.css"
const Terms: React.FC = () => {
  return (
    <div className={styles["guide-box"]}>
      <h3>Điều khoản sử dụng</h3>
      <p>
        Điều khoản sử dụng của chúng tôi nhằm bảo vệ quyền lợi của người dùng và đảm bảo sự công bằng trong các phiên đấu giá. 
        Khi tham gia, bạn đồng ý tuân thủ các điều khoản này, bao gồm nhưng không giới hạn trong các quy định về việc đăng ký tài khoản, tham gia đấu giá và thanh toán.
      </p>
      <p>
        Người dùng không được phép sử dụng nền tảng của chúng tôi vào mục đích gian lận, lừa đảo, hoặc vi phạm bất kỳ quy định pháp lý nào. 
        Các hành vi vi phạm sẽ bị xử lý nghiêm minh theo quy định của pháp luật.
      </p>
      <p>
        Chúng tôi bảo lưu quyền thay đổi điều khoản sử dụng vào bất kỳ lúc nào mà không cần thông báo trước. 
        Việc tiếp tục sử dụng trang web đồng nghĩa với việc bạn chấp nhận các thay đổi này.
      </p>
    </div>
  );
};

export default Terms;
