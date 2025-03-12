import React from "react";
import About from "./components/about";  // Đảm bảo đúng đường dẫn đến About.tsx

const Page: React.FC = () => {
  return (
    <div className="page-container">
      <About />
      {/* Các phần khác của trang */}
    </div>
  );
};

export default Page;
