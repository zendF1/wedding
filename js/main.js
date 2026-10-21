/**
 * ==============================================================================
 * MAIN JAVASCRIPT LOGIC
 * ==============================================================================
 * Điều khiển toàn bộ tương tác, render dữ liệu từ config.js, đếm ngược,
 * mở phong bì, phát nhạc, RSVP và sổ lưu bút.
 */

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    renderConfigData();
    initPhotoboothOpening();
    initAudioPlayer();
    initPetalsEffect();
    initEnvelope();
    initCountdown();
    initTimeline();
    initLoveStory();
    initGalleryAndLightbox();
    initDressCode();
    initRSVP();
    initGuestbook();
    initBankBoxes();
    initScrollReveal();
}

/**
 * 1. BIND DỮ LIỆU TỪ CONFIG VÀO DOM
 */
function renderConfigData() {
    const cfg = WEDDING_CONFIG;

    // Cập nhật thẻ Title của trình duyệt
    document.title = `Thiệp Mời Cưới - ${cfg.groom.shortName} & ${cfg.bride.shortName}`;

    // Helper gán ảnh kèm fallback thông minh
    const setImg = (elId, src, fallback) => {
        const el = document.getElementById(elId);
        if (!el) return;
        el.src = src;
        el.onerror = () => {
            if (fallback && el.src !== fallback) {
                el.src = fallback;
            }
        };
    };

    // Photobooth
    const pbHeadline = document.getElementById('pb-headline');
    if (pbHeadline) pbHeadline.textContent = cfg.photobooth.headline;

    const pbNames = document.getElementById('pb-names');
    if (pbNames) pbNames.textContent = `${cfg.groom.shortName} & ${cfg.bride.shortName}`;

    const pbSignature = document.getElementById('pb-couple-signature');
    if (pbSignature) pbSignature.textContent = `${cfg.groom.shortName} & ${cfg.bride.shortName}`;

    const waxMono = document.querySelector('.wax-monogram');
    if (waxMono && cfg.groom.name && cfg.bride.name) {
        const gFirst = cfg.groom.name.trim().split(' ').pop().charAt(0).toUpperCase() || 'C';
        const bFirst = cfg.bride.name.trim().split(' ').pop().charAt(0).toUpperCase() || 'T';
        waxMono.textContent = `${gFirst}♡${bFirst}`;
    }

    const pbDate = document.getElementById('pb-date');
    if (pbDate) pbDate.textContent = cfg.photobooth.dateText;

    if (cfg.photobooth.photos && cfg.photobooth.photos.length >= 3) {
        setImg('pb-photo-1', cfg.photobooth.photos[0].src, cfg.photobooth.photos[0].fallback);
        setImg('pb-photo-2', cfg.photobooth.photos[1].src, cfg.photobooth.photos[1].fallback);
        setImg('pb-photo-3', cfg.photobooth.photos[2].src, cfg.photobooth.photos[2].fallback);
    }

    // Hero Section
    const heroGroom = document.getElementById('hero-groom-name');
    if (heroGroom) heroGroom.textContent = cfg.groom.shortName;

    const heroBride = document.getElementById('hero-bride-name');
    if (heroBride) heroBride.textContent = cfg.bride.shortName;

    setImg('hero-banner-img', cfg.hero.coverImage, cfg.hero.coverImageFallback);
    setImg('envelope-letter-img', cfg.hero.invitationLetterImage, cfg.hero.invitationLetterFallback);

    // Lời mời
    const msgTitle = document.getElementById('invitation-title');
    if (msgTitle) msgTitle.textContent = cfg.invitationMessage.title;

    const msgContent = document.getElementById('invitation-content');
    if (msgContent) msgContent.textContent = cfg.invitationMessage.content;

    // Gia đình 2 bên
    const groomFather = document.getElementById('groom-father');
    if (groomFather) groomFather.textContent = cfg.groom.father;

    const groomMother = document.getElementById('groom-mother');
    if (groomMother) groomMother.textContent = cfg.groom.mother;

    const groomAddress = document.getElementById('groom-address');
    if (groomAddress) groomAddress.textContent = cfg.groom.address;

    const brideFather = document.getElementById('bride-father');
    if (brideFather) brideFather.textContent = cfg.bride.father;

    const brideMother = document.getElementById('bride-mother');
    if (brideMother) brideMother.textContent = cfg.bride.mother;

    const brideAddress = document.getElementById('bride-address');
    if (brideAddress) brideAddress.textContent = cfg.bride.address;

    // Profile Chú rể & Cô dâu
    const groomFullName = document.getElementById('groom-fullname');
    if (groomFullName) groomFullName.textContent = cfg.groom.name;

    const groomBio = document.getElementById('groom-bio');
    if (groomBio) groomBio.textContent = cfg.groom.bio;
    setImg('groom-avatar', cfg.groom.avatar, cfg.groom.avatarFallback);

    const brideFullName = document.getElementById('bride-fullname');
    if (brideFullName) brideFullName.textContent = cfg.bride.name;

    const brideBio = document.getElementById('bride-bio');
    if (brideBio) brideBio.textContent = cfg.bride.bio;
    setImg('bride-avatar', cfg.bride.avatar, cfg.bride.avatarFallback);

    // Thời gian & Địa điểm tiệc Nhà Gái
    if (cfg.event.brideEvent) {
        const b = cfg.event.brideEvent;
        const bTag = document.getElementById('bride-event-tag');
        if (bTag && b.tag) bTag.textContent = b.tag;
        const bTime = document.getElementById('bride-event-time');
        if (bTime) bTime.textContent = b.timeDisplay;
        const bSolar = document.getElementById('bride-solar-date');
        if (bSolar) bSolar.textContent = b.solarDateDisplay;
        const bLunar = document.getElementById('bride-lunar-date');
        if (bLunar) bLunar.textContent = b.lunarDateDisplay;
        const bName = document.getElementById('bride-venue-name');
        if (bName) bName.textContent = b.venueName;
        const bAddr = document.getElementById('bride-venue-address');
        if (bAddr) bAddr.textContent = b.venueAddress;
        const bMap = document.getElementById('btn-bride-maps');
        if (bMap) bMap.href = b.googleMapsLink;
    }

    // Thời gian & Địa điểm tiệc Nhà Trai
    if (cfg.event.groomEvent) {
        const g = cfg.event.groomEvent;
        const gTag = document.getElementById('groom-event-tag');
        if (gTag && g.tag) gTag.textContent = g.tag;
        const gTime = document.getElementById('groom-event-time');
        if (gTime) gTime.textContent = g.timeDisplay;
        const gSolar = document.getElementById('groom-solar-date');
        if (gSolar) gSolar.textContent = g.solarDateDisplay;
        const gLunar = document.getElementById('groom-lunar-date');
        if (gLunar) gLunar.textContent = g.lunarDateDisplay;
        const gName = document.getElementById('groom-venue-name');
        if (gName) gName.textContent = g.venueName;
        const gAddr = document.getElementById('groom-venue-address');
        if (gAddr) gAddr.textContent = g.venueAddress;
        const gMap = document.getElementById('btn-groom-maps');
        if (gMap) gMap.href = g.googleMapsLink;
    }

    // Footer & Desktop Panels
    const footerQuote = document.getElementById('footer-quote');
    if (footerQuote) footerQuote.textContent = `${cfg.groom.shortName} & ${cfg.bride.shortName}`;

    const deskNames = document.getElementById('desktop-couple-names');
    if (deskNames) deskNames.textContent = `${cfg.groom.shortName} & ${cfg.bride.shortName}`;

    const deskQuote = document.getElementById('desktop-quote-author');
    if (deskQuote) deskQuote.textContent = `— ${cfg.groom.shortName} & ${cfg.bride.shortName}`;
}

/**
 * 2. MÀN HÌNH CHÀO PHOTOBOOTH & NÚT MỞ THIỆP
 */
function initPhotoboothOpening() {
    const openingScreen = document.getElementById('photobooth-opening');
    const openBtn = document.getElementById('btn-open-invitation');

    if (!openingScreen || !openBtn) return;

    openBtn.addEventListener('click', () => {
        // Ẩn màn hình mở màn
        openingScreen.classList.add('is-hidden');

        // Bật nhạc tự động khi có tương tác của người dùng
        const audio = document.getElementById('wedding-audio');
        const musicBtn = document.getElementById('music-toggle-btn');
        if (audio) {
            audio.play().then(() => {
                if (musicBtn) musicBtn.classList.add('is-playing');
            }).catch(() => {
                console.log("Audio autoplay was restricted by browser.");
            });
        }

        // Tự động mở nhẹ phong bì sau khi vào
        setTimeout(() => {
            const envelopeBox = document.getElementById('envelope-box');
            if (envelopeBox) {
                envelopeBox.classList.add('is-open');
                createHeartBurst(envelopeBox);
            }
        }, 1200);
    });
}

/**
 * 3. AUDIO PLAYER (ĐIỀU KHIỂN NHẠC NỀN)
 */
function initAudioPlayer() {
    const audio = document.getElementById('wedding-audio');
    const musicBtn = document.getElementById('music-toggle-btn');
    if (!audio || !musicBtn) return;

    audio.src = WEDDING_CONFIG.audio.src;
    audio.onerror = () => {
        if (WEDDING_CONFIG.audio.fallbackSrc && audio.src !== WEDDING_CONFIG.audio.fallbackSrc) {
            audio.src = WEDDING_CONFIG.audio.fallbackSrc;
        }
    };

    musicBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play().then(() => {
                musicBtn.classList.add('is-playing');
                showToast("Đang phát nhạc nền 🎵");
            }).catch(() => {});
        } else {
            audio.pause();
            musicBtn.classList.remove('is-playing');
            showToast("Đã tạm dừng nhạc ⏸️");
        }
    });
}

/**
 * 4. HIỆU ỨNG CÁNH HOA RƠI (PETALS RAIN)
 */
function initPetalsEffect() {
    const container = document.getElementById('petals-container');
    if (!container) return;

    const PETAL_COUNT = 15;
    for (let i = 0; i < PETAL_COUNT; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.style.left = `${Math.random() * 100}%`;
        petal.style.animationDuration = `${6 + Math.random() * 8}s`;
        petal.style.animationDelay = `${Math.random() * 5}s`;
        petal.style.transform = `scale(${0.6 + Math.random() * 0.6})`;
        container.appendChild(petal);
    }
}

/**
 * 5. PHONG BÌ TƯƠNG TÁC
 */
function initEnvelope() {
    const envelope = document.getElementById('envelope-box');
    if (!envelope) return;

    envelope.addEventListener('click', () => {
        envelope.classList.toggle('is-open');
        if (envelope.classList.contains('is-open')) {
            createHeartBurst(envelope);
            showToast("Đã mở thiệp cưới! ❤️");
        }
    });
}

function createHeartBurst(container) {
    for (let i = 0; i < 6; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '❤️';
        heart.style.left = `${40 + Math.random() * 20}%`;
        heart.style.top = `60%`;
        heart.style.animationDelay = `${i * 0.15}s`;
        container.appendChild(heart);
        setTimeout(() => heart.remove(), 2600);
    }
}

/**
 * 6. BỘ ĐẾM NGƯỢC (COUNTDOWN TIMER)
 */
function initCountdown() {
    const daysEl = document.getElementById('cd-days');
    const hoursEl = document.getElementById('cd-hours');
    const minsEl = document.getElementById('cd-mins');
    const secsEl = document.getElementById('cd-secs');

    if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

    const targetDate = new Date(WEDDING_CONFIG.event.weddingDate).getTime();

    function update() {
        const now = new Date().getTime();
        const diff = targetDate - now;

        if (diff <= 0) {
            daysEl.textContent = "00";
            hoursEl.textContent = "00";
            minsEl.textContent = "00";
            secsEl.textContent = "00";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        daysEl.textContent = days < 10 ? `0${days}` : days;
        hoursEl.textContent = hours < 10 ? `0${hours}` : hours;
        minsEl.textContent = minutes < 10 ? `0${minutes}` : minutes;
        secsEl.textContent = seconds < 10 ? `0${seconds}` : seconds;
    }

    update();
    setInterval(update, 1000);
}

/**
 * 7. RENDER TIMELINE
 */
function initTimeline() {
    const list = document.getElementById('timeline-list');
    if (!list || !WEDDING_CONFIG.timeline) return;

    list.innerHTML = WEDDING_CONFIG.timeline.map(item => `
        <div class="timeline-card reveal-on-scroll">
            <div class="timeline-icon-box">${item.icon}</div>
            <div class="timeline-content-box">
                <div class="timeline-time-badge">${item.time}</div>
                <div class="timeline-item-title">${item.title}</div>
                <div class="timeline-item-desc">${item.desc}</div>
            </div>
        </div>
    `).join('');
}

/**
 * 8. RENDER CÂU CHUYỆN TÌNH YÊU
 */
function initLoveStory() {
    const container = document.getElementById('love-story-container');
    if (!container || !WEDDING_CONFIG.loveStory) return;

    container.innerHTML = WEDDING_CONFIG.loveStory.map(item => `
        <div class="story-card reveal-on-scroll">
            <div class="story-img-frame">
                <img src="${item.image}" alt="${item.title}" onerror="if(this.src!=='${item.imageFallback}'){this.src='${item.imageFallback}';}">
            </div>
            <div class="story-body">
                <div class="story-year">${item.year}</div>
                <div class="story-title">${item.title}</div>
                <div class="story-desc">${item.desc}</div>
            </div>
        </div>
    `).join('');
}

/**
 * 9. RENDER ALBUM ẢNH & LIGHTBOX
 */
function initGalleryAndLightbox() {
    const grid = document.getElementById('gallery-grid');
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('lightbox-close');

    if (!grid || !WEDDING_CONFIG.gallery) return;

    grid.innerHTML = WEDDING_CONFIG.gallery.map((item, idx) => `
        <div class="gallery-item reveal-on-scroll" data-index="${idx}">
            <img src="${item.src}" alt="${item.caption}" onerror="if(this.src!=='${item.fallback}'){this.src='${item.fallback}';}">
            <div class="gallery-zoom-overlay">🔍</div>
        </div>
    `).join('');

    grid.addEventListener('click', (e) => {
        const item = e.target.closest('.gallery-item');
        if (!item) return;
        const img = item.querySelector('img');
        if (img && modal && modalImg) {
            modalImg.src = img.src;
            modal.classList.add('is-active');
        }
    });

    if (modal && closeBtn) {
        closeBtn.addEventListener('click', () => modal.classList.remove('is-active'));
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('is-active');
        });
    }
}

/**
 * 10. DRESS CODE PALETTE
 */
function initDressCode() {
    const palette = document.getElementById('dresscode-palette');
    if (!palette || !WEDDING_CONFIG.dressCode) return;

    palette.innerHTML = WEDDING_CONFIG.dressCode.map(item => `
        <div class="color-swatch-item">
            <div class="swatch-circle" style="background-color: ${item.color}; ${item.border ? `border: 1px solid ${item.border};` : ''}"></div>
            <span class="swatch-name">${item.name}</span>
        </div>
    `).join('');
}

/**
 * 11. XỬ LÝ FORM XÁC NHẬN THAM DỰ (RSVP)
 */
function initRSVP() {
    const form = document.getElementById('rsvp-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = form.querySelector('[name="name"]').value.trim();
        const side = form.querySelector('[name="side"]:checked')?.value || "Bạn bè";
        const guests = form.querySelector('[name="guests"]').value;
        const note = form.querySelector('[name="note"]').value.trim();

        if (!name) {
            showToast("Vui lòng nhập họ và tên của bạn nhé!");
            return;
        }

        const newRSVP = {
            name,
            side,
            guests,
            note,
            submittedAt: new Date().toISOString()
        };

        // Lưu vào localStorage
        const list = JSON.parse(localStorage.getItem('wedding_rsvp') || '[]');
        list.push(newRSVP);
        localStorage.setItem('wedding_rsvp', JSON.stringify(list));

        form.reset();
        showToast("Cảm ơn bạn đã xác nhận tham dự! Hẹn gặp bạn tại bữa tiệc! 🎉");
    });
}

/**
 * 12. SỔ LƯU BÚT ĐIỆN TỬ (GUESTBOOK)
 */
function initGuestbook() {
    const form = document.getElementById('guestbook-form');
    const feed = document.getElementById('wishes-feed');
    if (!feed) return;

    // Lấy lời chúc từ config + localStorage
    let storedWishes = JSON.parse(localStorage.getItem('wedding_wishes') || '[]');
    let allWishes = [...storedWishes, ...(WEDDING_CONFIG.initialWishes || [])];

    function renderWishes() {
        feed.innerHTML = allWishes.map(w => `
            <div class="wish-item">
                <div class="wish-header">
                    <span class="wish-author">${escapeHtml(w.name)}</span>
                    <span class="wish-time">${w.time || 'Vừa xong'}</span>
                </div>
                <div class="wish-body">${escapeHtml(w.content)}</div>
            </div>
        `).join('');
    }

    renderWishes();

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = form.querySelector('[name="guest_name"]').value.trim();
            const content = form.querySelector('[name="guest_message"]').value.trim();

            if (!name || !content) {
                showToast("Vui lòng điền tên và lời chúc của bạn nhé!");
                return;
            }

            const newWish = {
                name,
                content,
                time: "Vừa xong"
            };

            storedWishes.unshift(newWish);
            localStorage.setItem('wedding_wishes', JSON.stringify(storedWishes));
            allWishes = [newWish, ...allWishes];
            renderWishes();
            form.reset();
            showToast("Cảm ơn lời chúc ngọt ngào của bạn! ❤️");
        });
    }
}

/**
 * 13. HỘP MỪNG CƯỚI (VIETQR VÀ SAO CHÉP STK)
 */
function initBankBoxes() {
    const cfg = WEDDING_CONFIG;
    const groomCard = document.getElementById('bank-card-groom');
    const brideCard = document.getElementById('bank-card-bride');

    // Chú Rể
    if (groomCard && cfg.groom.bank) {
        const b = cfg.groom.bank;
        const qrUrl = b.qrImage || `https://img.vietqr.io/image/${b.bankId}-${b.accountNumber}-compact2.png?amount=0&addInfo=${encodeURIComponent(`Mung cuoi ${cfg.groom.shortName}`)}&accountName=${encodeURIComponent(b.accountName)}`;

        groomCard.innerHTML = `
            <div class="bank-card-title">Mừng Cưới Đến ${cfg.groom.title}</div>
            <div class="qr-code-frame">
                <img src="${qrUrl}" alt="QR Chú Rể" onerror="this.src='${b.qrFallback || qrUrl}'">
            </div>
            <div class="bank-info-line">Ngân hàng: <strong>${b.bankName}</strong></div>
            <div class="bank-info-line">Chủ tài khoản: <strong>${b.accountName}</strong></div>
            <div class="bank-acc-number">${b.accountNumber}</div>
            <button class="btn-copy" onclick="copyToClipboard('${b.accountNumber}', 'Đã sao chép số tài khoản Chú Rể!')">
                📋 Sao chép số tài khoản
            </button>
        `;
    }

    // Cô Dâu
    if (brideCard && cfg.bride.bank) {
        const b = cfg.bride.bank;
        const qrUrl = b.qrImage || `https://img.vietqr.io/image/${b.bankId}-${b.accountNumber}-compact2.png?amount=0&addInfo=${encodeURIComponent(`Mung cuoi ${cfg.bride.shortName}`)}&accountName=${encodeURIComponent(b.accountName)}`;

        brideCard.innerHTML = `
            <div class="bank-card-title">Mừng Cưới Đến ${cfg.bride.title}</div>
            <div class="qr-code-frame">
                <img src="${qrUrl}" alt="QR Cô Dâu" onerror="this.src='${b.qrFallback || qrUrl}'">
            </div>
            <div class="bank-info-line">Ngân hàng: <strong>${b.bankName}</strong></div>
            <div class="bank-info-line">Chủ tài khoản: <strong>${b.accountName}</strong></div>
            <div class="bank-acc-number">${b.accountNumber}</div>
            <button class="btn-copy" onclick="copyToClipboard('${b.accountNumber}', 'Đã sao chép số tài khoản Cô Dâu!')">
                📋 Sao chép số tài khoản
            </button>
        `;
    }
}

/**
 * 14. TIỆN ÍCH COPY & TOAST & SCROLL
 */
window.copyToClipboard = function(text, successMsg) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            showToast(successMsg || "Đã sao chép!");
        }).catch(() => {
            fallbackCopy(text, successMsg);
        });
    } else {
        fallbackCopy(text, successMsg);
    }
};

function fallbackCopy(text, msg) {
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    showToast(msg || "Đã sao chép!");
}

function showToast(message) {
    let toast = document.getElementById('toast-notice');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast-notice';
        toast.className = 'toast-notice';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
        toast.classList.remove('show');
    }, 3200);
}

function initScrollReveal() {
    const elements = document.querySelectorAll('.reveal-on-scroll');
    if (!('IntersectionObserver' in window)) {
        elements.forEach(el => el.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    elements.forEach(el => observer.observe(el));
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&#039;");
}
