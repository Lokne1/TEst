import { User, ShoppingCart, Clock, History, FileText } from "lucide-react"
import styles from "./page.module.css"
import Profile from "./profile"

export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.menuItem + " " + styles.active}>
          <User size={20} />
          <span>Thông tin tài khoản</span>
        </div>

        <div className={styles.menuItem}>
          <Clock size={20} />
          <span>Chờ đấu giá</span>
        </div>
        <div className={styles.menuItem}>
          <History size={20} />
          <span>Lịch sử đấu giá</span>
        </div>
      </div>
      <Profile />
    </div>
  )
}

