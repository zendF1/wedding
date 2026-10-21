/**
 * ==============================================================================
 * CẤU HÌNH THÔNG TIN ĐÁM CƯỚI (WEDDING CONFIG)
 * ==============================================================================
 * Bạn chỉ cần chỉnh sửa các thông tin trong file này để thay đổi toàn bộ website!
 * Không cần phải chỉnh sửa file index.html.
 */

const WEDDING_CONFIG = {
    // 1. THÔNG TIN CHÚ RỂ (GROOM)
    groom: {
        name: "Nguyễn Văn Chường",                     // Họ và tên đầy đủ chú rể
        shortName: "Văn Chường",                 // Tên gọi ngắn gọn / Tên thân mật
        title: "Chú Rể",
        father: "Ông: Nguyễn Văn Khuôn",             // Tên bố chú rể
        mother: "Bà: Đặng Thị Loan",                 // Tên mẹ chú rể
        address: "Xã Tây Thái Ninh, Hưng Yên",     // Địa chỉ nhà trai
        avatar: "assets/images/groom.jpg",      // Đặt ảnh vào assets/images/groom.jpg
        avatarFallback: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80",
        bio: "Cảm ơn em đã bước vào cuộc đời anh, cùng anh trải qua những tháng năm thanh xuân và viết tiếp hành trình hạnh phúc phía trước.",
        bank: {
            bankName: "Ngân Hàng BIDV",
            bankId: "BIDV",                       // Mã ngân hàng theo VietQR (MB, VCB, TCB, ACB, ...)
            accountNumber: "2223636492",         // Số tài khoản chú rể
            accountName: "NGUYEN VAN CHUONG",        // Tên chủ tài khoản (viết hoa không dấu)
            qrImage: "assets/images/qr-groom.jpg" // Đặt ảnh mã QR vào assets/images/qr-groom.jpg (hoặc để trống để tự tạo VietQR)
        }
    },

    // 2. THÔNG TIN CÔ DÂU (BRIDE)
    bride: {
        name: "Đỗ Thị Thu Thảo",                     // Họ và tên đầy đủ cô dâu
        shortName: "Thu Thảo",                   // Tên gọi ngắn gọn / Tên thân mật
        title: "Cô Dâu",
        father: "Ông: Đỗ Ngọc Trừu",              // Tên bố cô dâu
        mother: "Bà: Phạm Thị Chinh",               // Tên mẹ cô dâu
        address: "Xã Thái Ninh, Hưng Yên",     // Địa chỉ nhà gái
        avatar: "assets/images/bride.jpg",      // Đặt ảnh vào assets/images/bride.jpg
        avatarFallback: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80",
        bio: "Từ hôm nay, chúng ta không chỉ là người yêu mà là người bạn đồng hành, là gia đình trọn đời của nhau. Em yêu anh!",
        bank: {
            bankName: "Ngân Hàng Techcombank",
            bankId: "TCB",                      // Mã ngân hàng theo VietQR
            accountNumber: "9876543210",         // Số tài khoản cô dâu
            accountName: "DO THI THU THAO",          // Tên chủ tài khoản (viết hoa không dấu)
            qrImage: "assets/images/qr-bride.jpg" // Đặt ảnh mã QR vào assets/images/qr-bride.jpg (hoặc để trống để tự tạo VietQR)
        }
    },

    // 3. THỜI GIAN & ĐỊA ĐIỂM TỔ CHỨC (HỖ TRỢ 2 ĐỊA ĐIỂM CƯỚI TẠI TƯ GIA)
    event: {
        // Mốc thời gian chính cho bộ đếm ngược: YYYY-MM-DDTHH:mm:ss
        weddingDate: "2027-02-21T09:00:00",

        // ĐỊA ĐIỂM 1: TIỆC CƯỚI TẠI NHÀ GÁI (LỄ VU QUY)
        brideEvent: {
            tag: "LỄ VU QUY (TIỆC NHÀ GÁI)",
            timeDisplay: "11:00",
            solarDateDisplay: "Thứ Bảy, ngày 20 tháng 02 năm 2027",
            lunarDateDisplay: "(Tức ngày 15 tháng 01 năm 2027 âm lịch)",
            venueName: "TƯ GIA NHÀ GÁI",
            venueAddress: "Xã Thái Ninh, Hưng Yên",
            googleMapsLink: "https://maps.google.com/?q=Thái+Ninh+Hưng+Yên"
        },

        // ĐỊA ĐIỂM 2: TIỆC CƯỚI TẠI NHÀ TRAI (LỄ THÀNH HÔN)
        groomEvent: {
            tag: "LỄ THÀNH HÔN (TIỆC NHÀ TRAI)",
            timeDisplay: "09:00",
            solarDateDisplay: "Chủ nhật, ngày 21 tháng 02 năm 2027",
            lunarDateDisplay: "(Tức ngày 16 tháng 01 năm 2027 âm lịch)",
            venueName: "TƯ GIA NHÀ TRAI",
            venueAddress: "Xã Tây Thái Ninh, Hưng Yên",
            googleMapsLink: "https://maps.google.com/?q=Tây+Thái+Ninh+Hưng+Yên"
        }
    },

    // 4. NHẠC NỀN ĐÁM CƯỚI
    audio: {
        src: "assets/music/wedding-song.mp3",    // Đặt bài nhạc mp3 vào assets/music/wedding-song.mp3
        fallbackSrc: "https://assets.cinelove.me/mp3/4b2c2aa5-0a5b-47c5-9d8b-ca678aae384f.mp3"
    },

    // 5. MÀN HÌNH CHÀO MỞ MÀN (PHOTOBOOTH 3 ẢNH)
    photobooth: {
        headline: "WE ARE GETTING MARRIED!",
        dateText: "21 . 02 . 2027",
        photos: [
            {
                src: "assets/images/photobooth-1.jpg",
                fallback: "https://images.unsplash.com/photo-1519741497674-611481863552?w=500&auto=format&fit=crop&q=80"
            },
            {
                src: "assets/images/photobooth-2.jpg",
                fallback: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500&auto=format&fit=crop&q=80"
            },
            {
                src: "assets/images/photobooth-3.jpg",
                fallback: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=500&auto=format&fit=crop&q=80"
            }
        ]
    },

    // 6. ẢNH BÌA & THƯ MỜI
    hero: {
        coverImage: "assets/images/hero.jpg",
        coverImageFallback: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200&auto=format&fit=crop&q=80",
        invitationLetterImage: "assets/images/envelope-card.jpg",
        invitationLetterFallback: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&auto=format&fit=crop&q=80"
    },

    // 7. LỜI MỜI / LỜI NGỎ
    invitationMessage: {
        title: "THƯ MỜI THÀNH HÔN",
        content: "Trong ngày vui trọng đại của cuộc đời, sự hiện diện và những lời chúc phúc của quý cô bác, anh chị và bạn bè thân thương là niềm vinh dự và hạnh phúc vô bờ của gia đình chúng tôi. Trân trọng kính mời quý vị đến chung vui và nâng ly chúc phúc cho ngày hạnh phúc của chúng tôi!"
    },

    // 8. LỊCH TRÌNH TIỆC CƯỚI (TIMELINE)
    timeline: [
        {
            time: "11:00",
            title: "Lễ Thành Hôn",
            desc: "Nghi thức trao nhẫn và lễ gia tiên tại tư gia",
            icon: "💒"
        },
        {
            time: "17:30",
            title: "Đón Tiếp Khách Mời",
            desc: "Check-in, chụp ảnh lưu niệm cùng Cô Dâu & Chú Rể",
            icon: "📸"
        },
        {
            time: "18:30",
            title: "Khai Tiệc & Nghi Thức Cưới",
            desc: "Nghi thức cắt bánh, rót rượu và thưởng thức ẩm thực",
            icon: "🥂"
        },
        {
            time: "20:00",
            title: "After-Party & Hòa Ca",
            desc: "Mini game bốc thăm may mắn, khiêu vũ cùng bạn bè",
            icon: "🎉"
        }
    ],

    // 9. CÂU CHUYỆN TÌNH YÊU (LOVE STORY)
    loveStory: [
        {
            year: "2020",
            title: "Lần đầu gặp gỡ",
            desc: "Một buổi chiều thu Hà Nội trong veo, ánh mắt vô tình chạm nhau ở quán cà phê nhỏ quen thuộc...",
            image: "assets/images/story-1.jpg",
            imageFallback: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&auto=format&fit=crop&q=80"
        },
        {
            year: "2022",
            title: "Lời tỏ tình ấm áp",
            desc: "Cùng nhau đón hoàng hôn bên bờ biển, lời tỏ tình chân thành đã mở ra một chương mới đầy yêu thương.",
            image: "assets/images/story-2.jpg",
            imageFallback: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&auto=format&fit=crop&q=80"
        },
        {
            year: "2025",
            title: "Em đồng ý (She Said Yes!)",
            desc: "Dưới ánh nến lung linh và giai điệu tình ca, chiếc nhẫn cầu hôn đã được trao tay cùng lời hẹn ước trọn đời.",
            image: "assets/images/story-3.jpg",
            imageFallback: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&auto=format&fit=crop&q=80"
        },
        {
            year: "2026",
            title: "Ngày chung đôi",
            desc: "Từ hai con người xa lạ trở thành tri kỷ, và hôm nay chính thức về chung một mái nhà.",
            image: "assets/images/story-4.jpg",
            imageFallback: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80"
        }
    ],

    // 10. ALBUM ẢNH CƯỚI (GALLERY)
    gallery: [
        {
            src: "assets/images/gallery-1.jpg",
            fallback: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80",
            caption: "Khoảnh khắc trao lời thề nguyện"
        },
        {
            src: "assets/images/gallery-2.jpg",
            fallback: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&auto=format&fit=crop&q=80",
            caption: "Nụ cười rạng rỡ của em"
        },
        {
            src: "assets/images/gallery-3.jpg",
            fallback: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&auto=format&fit=crop&q=80",
            caption: "Bên nhau bình yên từng phút giây"
        },
        {
            src: "assets/images/gallery-4.jpg",
            fallback: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&auto=format&fit=crop&q=80",
            caption: "Hành trình yêu thương đong đầy"
        },
        {
            src: "assets/images/gallery-5.jpg",
            fallback: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&auto=format&fit=crop&q=80",
            caption: "Nắm tay nhau đi qua năm tháng"
        },
        {
            src: "assets/images/gallery-6.jpg",
            fallback: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&auto=format&fit=crop&q=80",
            caption: "Ngày đẹp nhất trong đời"
        }
    ],

    // 11. QUY CHUẨN TRANG PHỤC (DRESS CODE)
    dressCode: [
        { name: "Trắng", color: "#FFFFFF", border: "#E0E0E0" },
        { name: "Be / Kem", color: "#F4ECD8" },
        { name: "Hồng Pastel", color: "#F7D6D0" },
        { name: "Đỏ Rượu", color: "#812927" }
    ],

    // 12. LỜI CHÚC MẪU BAN ĐẦU
    initialWishes: [
        {
            name: "Nhóm Bạn Thân Đại Học",
            time: "10 phút trước",
            content: "Chúc hai bạn trăm năm hạnh phúc, răng long đầu bạc, luôn yêu thương và thấu hiểu nhau như những ngày đầu!"
        },
        {
            name: "Gia đình Bác Hùng",
            time: "1 giờ trước",
            content: "Chúc hai cháu xây dựng một tổ ấm ngập tràn tiếng cười, gia đạo bình an và sớm đón thiên thần nhỏ."
        },
        {
            name: "Bạn Đồng Nghiệp",
            time: "3 giờ trước",
            content: "Chúc mừng ngày vui của hai bạn! Chúc cặp đôi vàng mãi mặn nồng và thành công trên mọi chặng đường chung đôi."
        }
    ]
};
