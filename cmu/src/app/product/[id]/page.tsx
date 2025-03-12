"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./AuctionDetail.module.css";

const auctions = [
  {
    id: 1,
    img: "/image.jpg",
    time: "06/03/2025 09:30:00",
    title: "Xe ô tô nhãn hiệu Toyota Camry 3.0",
    price: "47,000,000,000 VNĐ",
    status: "Chưa đấu giá",
    startPrice: "1,265,000,000 VNĐ",
    assetCode: "MTS-Y6LWVU",
    registrationTime: "11/02/2025 08:00:00",
    endTime: "03/03/2025 16:00:00",
    deposit: "126,500,000 VNĐ",
    startAuction: "06/03/2025 13:00:00",
    endAuction: "06/03/2025 14:00:00",
  },
  {
    id: 2,
    img: "/image.jpg",
    time: "06/03/2025 09:30:00",
    title: "Xe ô tô nhãn hiệu Toyota Camry 3.0",
    price: "47,000,000,000 VNĐ",
    status: "Chưa đấu giá",
    startPrice: "1,265,000,000 VNĐ",
    assetCode: "MTS-Y6LWVU",
    registrationTime: "11/02/2025 08:00:00",
    endTime: "03/03/2025 16:00:00",
    deposit: "126,500,000 VNĐ",
    startAuction: "06/03/2025 13:00:00",
    endAuction: "06/03/2025 14:00:00",
  },
];

export default function AuctionDetail() {
  const params = useParams();
  const { id } = params; 
  const auction = auctions.find((item) => item.id === Number(id));

  const calculateTimeLeft = () => {
    const now = new Date();
    const end = auction?.endAuction ? new Date(auction.endAuction) : new Date();
    const difference = end.getTime() - now.getTime();
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (!auction) return;
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [auction]);

  if (!auction) return <p className={styles.errorText}>Sản phẩm không tồn tại!</p>;

  return (
    <div className={styles.container}>
        <div className={styles.countdown}>
          <h2 className="text-lg font-bold">Thời gian đếm ngược</h2>
          {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 ? (
            <p className="text-red-500">Đấu giá đã kết thúc!</p>
          ) : (
            <p className="text-xl font-bold">
              {timeLeft.days} ngày {timeLeft.hours} giờ {timeLeft.minutes} phút {timeLeft.seconds} giây
            </p>
          )}
        </div>
      <div className={styles.imageContainer}>
        <Image src={auction.img} alt={auction.title} width={600} height={400} className={styles.image} />
      </div>
      <div className={styles.detailsGrid}>
        <div className={styles.infoBox}>
          <h1 className={styles.title}>{auction.title}</h1>
          <p className={styles.assetCode}>Mã tài sản: {auction.assetCode}</p>
          <p><strong>Giá khởi điểm:</strong> {auction.startPrice}</p>
          <p><strong>Thời gian đăng ký:</strong> {auction.registrationTime}</p>
          <p><strong>Thời gian kết thúc đăng ký:</strong> {auction.endTime}</p>
          <p><strong>Tiền đặt trước:</strong> {auction.deposit}</p>
          <p><strong>Thời gian bắt đầu đấu giá:</strong> {auction.startAuction}</p>
          <p><strong>Thời gian kết thúc đấu giá:</strong> {auction.endAuction}</p>
        </div>
        
      </div>
      <div className={styles.buttonGroup}>
        <button className={`${styles.button} ${styles.primary}`}>Mô tả tài sản</button>
        <button className={`${styles.button} ${styles.secondary}`}>Thông tin đấu giá</button>
        <button className={`${styles.button} ${styles.secondary}`}>Tài liệu liên quan</button>
      </div>
    </div>
  );
}
