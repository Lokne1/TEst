"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./homepage.module.css";
import { useRouter } from "next/router";
const auctions = [
  { id: 1, img: "/image.jpg", time: "08/04/2025 13:00:00", title: "", price: "68,162,068,617 VNĐ" },
  { id: 2, img: "/image.jpg", time: "06/03/2025 09:00:00", title: "", price: "322,100,000,000 VNĐ" },
  { id: 3, img: "/image.jpg", time: "06/03/2025 10:00:00", title: "", price: "1,179,000,000,000 VNĐ" },
  { id: 4, img: "/image.jpg", time: "06/03/2025 10:00:00", title: "", price: "1,824,000,000,000 VNĐ" },
  { id: 5, img: "/image.jpg", time: "06/03/2025 11:00:00", title: "", price: "120,000,000,000 VNĐ" },
  { id: 6, img: "/image.jpg", time: "06/03/2025 11:15:00", title: "", price: "950,000,000,000 VNĐ" },
  { id: 7, img: "/image.jpg", time: "06/03/2025 11:30:00", title: "", price: "70,000,000,000 VNĐ" },
  { id: 8, img: "/image.jpg", time: "06/03/2025 11:45:00", title: "", price: "30,000,000,000 VNĐ" },
  { id: 9, img: "/image.jpg", time: "06/03/2025 12:00:00", title: "", price: "600,000,000,000 VNĐ" },
  { id: 10, img: "/image.jpg", time: "06/03/2025 12:30:00", title: "", price: "1,200,000,000,000 VNĐ" },
];

export default function Homepage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;
  const totalPages = Math.ceil(auctions.length / itemsPerPage);
  const displayedItems = auctions.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.bannerContent}>
          <h2>Chào mừng bạn đến với Auction</h2>
        </div>
        <div className={styles.bannerImage}>
          <Image src="/image.jpg" alt="Đấu giá " width={500} height={300} />
        </div>
      </div>
      <div className={styles.grid}>
        {displayedItems.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image src={item.img} alt={item.title} width={200} height={150} className={styles.image} />
            </div>
            <p className={styles.time}>{item.time}</p>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.price}>{item.price}</p>
            <Link href={`/product/${item.id}`}>
               <button className="button">Chi Tiết</button>
            </Link>

          </div>
        ))}
      </div>
      <div className={styles.pagination}>
        <button className={styles.pageButton} disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Trước</button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`${styles.pageButton} ${currentPage === index + 1 ? styles.activePage : ""}`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button className={styles.pageButton} disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>Sau</button>
      </div>
    </div>
  );
}
