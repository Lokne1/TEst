import { Calendar, ChevronDown, Upload } from "lucide-react"
import styles from "./profile.module.css"

export default function Profile() {
  return (
    <div className={styles.accountInfo}>
      <div className={styles.header}>
        <h1>Thông tin tài khoản</h1>
        <div className={styles.actions}>
          <button className={styles.updateButton}>Cập nhật thông tin</button>
          <button className={styles.passwordButton}>
            <span className={styles.lockIcon}>🔒</span> Thay đổi mật khẩu
          </button>
        </div>
      </div>

      <div className={styles.formContainer}>
        <h2>Thông tin cá nhân</h2>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label>
              <span className={styles.required}>*</span> Họ và tên
            </label>
            <input type="text" placeholder=" " />
          </div>

          <div className={styles.formGroup}>
            <label>
              <span className={styles.required}>*</span> Số điện thoại
            </label>
            <input type="text" placeholder=" " />
          </div>

          <div className={styles.formGroup}>
            <label>
              <span className={styles.required}>*</span> Email
            </label>
            <input type="email" placeholder="" />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label>
              <span className={styles.required}>*</span> Căn cước/CCCD
            </label>
            <input type="text" />
          </div>

          <div className={styles.formGroup}>
            <label>Mã số thuế</label>
            <input type="text" />
          </div>
        </div>

        <h2>Địa chỉ Nơi thường trú</h2>

        <div className={styles.formGroup + " " + styles.fullWidth}>
          <input type="text" placeholder="Địa chỉ chi tiết hoặc theo VNeID" />
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label>
              <span className={styles.required}>*</span> Chọn tỉnh/ thành phố
            </label>
            <div className={styles.selectWrapper}>
              <select>
                <option value="">Chọn tỉnh/thành phố</option>
              </select>
              <ChevronDown className={styles.selectIcon} size={16} />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>
              <span className={styles.required}>*</span> Chọn quận/ huyện
            </label>
            <div className={styles.selectWrapper}>
              <select>
                <option value="">Chọn quận/huyện</option>
              </select>
              <ChevronDown className={styles.selectIcon} size={16} />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>
              <span className={styles.required}>*</span> Chọn phường/ xã
            </label>
            <div className={styles.selectWrapper}>
              <select>
                <option value="">Chọn phường/xã</option>
              </select>
              <ChevronDown className={styles.selectIcon} size={16} />
            </div>
          </div>
        </div>

        <h2>Căn cước/CCCD</h2>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label>
              <span className={styles.required}>*</span> Ngày cấp
            </label>
            <div className={styles.dateInput}>
              <input type="text" placeholder="DD/MM/YYYY" />
              <Calendar className={styles.calendarIcon} size={16} />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>
              <span className={styles.required}>*</span> Nơi cấp
            </label>
            <div className={styles.selectWrapper}>
              <select>
                <option value="">Chọn nơi cấp</option>
              </select>
              <ChevronDown className={styles.selectIcon} size={16} />
            </div>
          </div>
        </div>

        <p className={styles.note}>
          <span>Lưu ý:</span> Tải ảnh mặt trước, mặt sau Căn cước/CCCD có gắn chip, ảnh nơi thường trú theo VNeID (Kiểu
          ảnh: .JPG, .PNG; kích thước &lt; 5Mb)
        </p>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label>
              <span className={styles.required}>*</span> Ảnh Căn cước/CCCD mặt trước
            </label>
            <div className={styles.uploadBox}>
              <div className={styles.uploadContent}>
                <Upload size={24} />
                <span>Tải lên</span>
              </div>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>
              <span className={styles.required}>*</span> Ảnh Căn cước/CCCD mặt sau
            </label>
            <div className={styles.uploadBox}>
              <div className={styles.uploadContent}>
                <Upload size={24} />
                <span>Tải lên</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.formGroup + " " + styles.fullWidth}>
          <label>Ảnh nơi thường trú theo VNeID</label>
        </div>
      </div>
    </div>
  )
}

