import React from "react";
import styles from "../about.module.css";
const LegalPolicy: React.FC = () => {
  return (
    <div>
      <div className = {styles["guide-box"]}>
        <h3>Chính sách pháp lý</h3>
      <p>
        Chính sách pháp lý của chúng tôi đảm bảo các quyền lợi hợp pháp của người dùng khi tham gia đấu giá trên trang web. 
        Mọi giao dịch được thực hiện trên nền tảng đều phải tuân thủ các quy định và pháp luật hiện hành của Việt Nam. 
        Chúng tôi cam kết bảo vệ thông tin cá nhân của người dùng và chỉ sử dụng thông tin đó vào mục đích phục vụ các giao dịch và cải thiện trải nghiệm người dùng.
      </p>
      <p>
        Bên cạnh đó, chúng tôi luôn đảm bảo rằng các phiên đấu giá đều minh bạch, công bằng và không có sự can thiệp từ bên ngoài. 
        Mọi sản phẩm được đưa lên đấu giá đều phải tuân thủ quy định về nguồn gốc, chất lượng và tính hợp pháp.
      </p>
      <p>
        Nếu có bất kỳ vấn đề gì liên quan đến pháp lý trong quá trình tham gia đấu giá, người dùng có thể liên hệ với chúng tôi thông qua các kênh hỗ trợ trực tuyến để được giải đáp.
      </p>
      </div>
    </div>
  );
};

export default LegalPolicy;
