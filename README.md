# 💍 WEBSITE THIỆP MỜI CƯỚI TRỰC TUYẾN (CineLove Style)

Trang web thiệp cưới tương tác cao cấp phong cách **Cinematic & Vintage Romantic**, lấy cảm hứng từ nền tảng CineLove. Được xây dựng hoàn toàn bằng **HTML, CSS và JavaScript thuần** - không cần cài đặt Node.js hay build phức tạp, có thể chạy trực tiếp trên máy tính và deploy lên **GitHub Pages** chỉ trong 1 phút.

---

## 🌟 TÍNH NĂNG NỔI BẬT

1. **Photobooth Opening Screen:** Dải phim 3 ảnh kỷ niệm phong cách Hàn Quốc trượt ra kèm nút *"Mở thiệp mời"*.
2. **Interactive Wax Seal Envelope:** Mô phỏng phong bì niêm phong sáp 3D, chạm để bung nắp phong bì và đẩy thiệp cưới cùng trái tim bay lượn.
3. **Hiệu ứng Cánh hoa rơi (Petals Rain):** Cánh hoa anh đào rơi nhẹ nhàng mang lại cảm giác lãng mạn.
4. **Trình phát nhạc đĩa than:** Đĩa nhạc xoay tròn êm dịu, tự động phát nhạc khi mở thiệp và có thể chạm để bật/tắt bất kỳ lúc nào.
5. **Bộ đếm ngược thời gian thực (Countdown Timer):** Tự động tính toán số Ngày - Giờ - Phút - Giây đến ngày hôn lễ.
6. **Bản đồ & Lịch thông minh:** 
   - 1-click mở ứng dụng Google Maps dẫn đường tới nhà hàng tiệc cưới.
   - 1-click tạo lịch hẹn Google Calendar để khách không bỏ lỡ ngày vui.
7. **Lịch trình tiệc cưới (Visual Timeline):** Dòng thời gian trực quan với biểu tượng sinh động cho từng mốc (Rước dâu, Đón khách, Khai tiệc, After-party).
8. **Chuyện tình yêu (Our Love Story) & Album ảnh cưới (Gallery):** Hiển thị các cột mốc tình yêu và album ảnh có hỗ trợ phóng to toàn màn hình (Lightbox).
9. **Quy chuẩn trang phục (Dress Code):** Gợi ý bảng màu trang phục dự tiệc trang nhã.
10. **Xác nhận tham dự (Smart RSVP):** Khách điền tên, số lượng người tham dự, ghi chú và lưu trữ tự động.
11. **Sổ lưu bút điện tử (Digital Guestbook):** Khách gửi lời chúc ngọt ngào và hiển thị trực tiếp trên trang.
12. **Hộp mừng cưới VietQR:** Tự động tạo mã QR chuẩn ngân hàng cho Chú Rể & Cô Dâu kèm nút sao chép số tài khoản tiện lợi.

---

## 🚀 HƯỚNG DẪN SỬ DỤNG & TÙY CHỈNH

### 1. Thay đổi thông tin đám cưới
Mọi thông tin về cặp đôi, ngày cưới, bố mẹ, địa điểm, STK đều được đặt tập trung trong file:
👉 **[`js/config.js`](file:///Users/inspius/Desktop/Porojet/github.com/wedding/js/config.js)**

Bạn chỉ cần mở file này và chỉnh sửa các dòng chữ theo ý muốn. Toàn bộ website sẽ tự động cập nhật mà không cần động đến file `index.html`.

### 2. Thay đổi hình ảnh & nhạc
Bạn chỉ việc copy ảnh của bạn vào thư mục `assets/images/` với các tên file tương ứng:
- `photobooth-1.jpg`, `photobooth-2.jpg`, `photobooth-3.jpg`: 3 ảnh trên dải phim mở màn
- `hero.jpg`: Ảnh bìa chính
- `envelope-card.jpg`: Ảnh trong phong bì
- `groom.jpg`: Chân dung chú rể
- `bride.jpg`: Chân dung cô dâu
- `story-1.jpg` đến `story-4.jpg`: 4 ảnh cho chuyện tình yêu
- `gallery-1.jpg` đến `gallery-6.jpg`: 6 ảnh album cưới
- `assets/music/wedding-song.mp3`: Bài nhạc nền yêu thích

*(Nếu bạn chưa có ảnh hoặc chưa đổi tên, web sẽ tự động sử dụng ảnh demo chất lượng cao để giao diện luôn trọn vẹn).*

---

## 🌐 HƯỚNG DẪN DEPLOY LÊN GITHUB PAGES (MIỄN PHÍ)

Vì website dùng HTML/CSS/JS thuần, bạn có thể đưa lên mạng trong vòng 1 phút:

1. **Khởi tạo Git & Push lên GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Khoi tao website thiep cuoi"
   git branch -M main
   git remote add origin https://github.com/<tai-khoan-cua-ban>/wedding.git
   git push -u origin main
   ```

2. **Kích hoạt GitHub Pages:**
   - Truy cập vào Repository trên GitHub: **Settings** -> **Pages**.
   - Tại mục **Build and deployment** > **Branch**: Chọn nhánh `main` và thư mục `/ (root)`.
   - Bấm **Save**.

3. **Nhận đường link website:**
   - Sau khoảng 30 giây đến 1 phút, GitHub sẽ cung cấp cho bạn một đường link miễn phí dạng:  
     `https://<tai-khoan-cua-ban>.github.io/wedding/`
   - Bạn có thể gửi link này qua Zalo, Messenger, Facebook hoặc gắn tên miền riêng bất kỳ!
