# HƯỚNG DẪN THAY ẢNH VÀ NHẠC ĐÁM CƯỚI

Trang web đã được thiết kế sẵn cơ chế **tự động nhận diện ảnh theo tên file**. Bạn chỉ cần đặt file ảnh vào thư mục `assets/images/` với các tên tương ứng dưới đây (nếu chưa có ảnh, website sẽ tự động dùng ảnh mẫu chất lượng cao):

## 1. Màn hình mở màn Photobooth (3 ảnh dọc)
- `photobooth-1.jpg`: Bức ảnh thứ 1 trên dải phim
- `photobooth-2.jpg`: Bức ảnh thứ 2 trên dải phim
- `photobooth-3.jpg`: Bức ảnh thứ 3 trên dải phim

## 2. Ảnh bìa chính & Phong bì
- `hero.jpg`: Ảnh cưới chính (kích thước ngang hoặc tỉ lệ 4:3 / 16:9)
- `envelope-card.jpg`: Ảnh nằm lồng bên trong bức thư phong bì

## 3. Chân dung Cô Dâu & Chú Rể
- `groom.jpg`: Ảnh đại diện của Chú Rể (hình vuông hoặc chân dung)
- `bride.jpg`: Ảnh đại diện của Cô Dâu (hình vuông hoặc chân dung)

## 4. Hành trình yêu nhau (Our Love Story)
- `story-1.jpg`: Lần đầu gặp gỡ
- `story-2.jpg`: Kỷ niệm / Chuyến đi đầu tiên
- `story-3.jpg`: Lời cầu hôn
- `story-4.jpg`: Ngày chung đôi

## 5. Album ảnh cưới (Gallery)
- `gallery-1.jpg` đến `gallery-6.jpg`: Các bức ảnh cưới đẹp nhất để khách bấm vào phóng to xem chi tiết.

## 6. Mã QR chuyển khoản mừng cưới (Tùy chọn)
- `qr-groom.jpg`: Mã QR tài khoản Chú Rể
- `qr-bride.jpg`: Mã QR tài khoản Cô Dâu
*(Lưu ý: Nếu không có ảnh QR, hệ thống sẽ tự động dùng API VietQR tạo mã chuẩn ngân hàng dựa trên số tài khoản bạn nhập trong `js/config.js`!)*

## 7. Nhạc nền
- Đặt file nhạc định dạng mp3 vào: `assets/music/wedding-song.mp3`
*(Nếu không có, web sẽ tự động phát nhạc không lời lãng mạn mặc định)*
