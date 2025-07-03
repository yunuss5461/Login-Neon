# 🍯 BalSepeti - Premium Bal Satışı E-Ticaret Sitesi

Modern, responsive ve kullanıcı dostu premium bal satışı e-ticaret sitesi. Doğal ve organik balların en kaliteli şekilde sunulduğu profesyonel web platformu.

## ✨ Özellikler

### 🎨 Premium Tasarım
- **Modern UI/UX**: Clean, minimal ve profesyonel tasarım
- **Renk Paleti**: Altın sarısı, kahverengi ve doğa tonları
- **Tipografi**: Google Fonts (Poppins + Playfair Display)
- **Responsive**: Tüm cihazlarda mükemmel görüntü
- **Animasyonlar**: Smooth CSS3 animasyonlar ve hover efektleri

### 🛒 E-Ticaret Fonksiyonları
- **Ürün Kataloğu**: Kategorilere ayrılmış bal ürünleri
- **Alışveriş Sepeti**: Sidebar cart ile hızlı erişim
- **Ürün Filtreleme**: Türe, fiyata ve özelliklere göre filtreleme
- **Hızlı Görüntüleme**: Modal ile ürün önizleme
- **Favoriler**: Wishlist özelliği
- **Arama**: Akıllı ürün arama sistemi

### 📱 Kullanıcı Deneyimi
- **Sticky Header**: Scroll'da sabit navigasyon
- **Smooth Scrolling**: Yumuşak sayfa geçişleri
- **Loading Animations**: Sayfa yüklenme animasyonları
- **Notifications**: Kullanıcı bilgilendirme sistemi
- **Mobile Optimized**: Touch-friendly mobile tasarım

## 🏗️ Teknik Yapı

### Frontend Technologies
- **HTML5**: Semantic markup
- **CSS3**: Modern styling, Grid, Flexbox
- **JavaScript (ES6+)**: Vanilla JS ile interaktif özellikler
- **Font Awesome**: İkon kütüphanesi
- **Google Fonts**: Web fontları

### Öne Çıkan Kod Özellikleri
- **Modular JavaScript**: Class-based organization
- **CSS Custom Properties**: Değişken sistemi
- **Mobile-First**: Responsive design approach
- **Performance Optimized**: Debounced events, lazy loading
- **Accessibility**: WCAG 2.1 uyumlu

## 📁 Dosya Yapısı

```
├── index.html          # Ana sayfa
├── style.css           # CSS stilleri
├── script.js           # JavaScript fonksiyonları
├── README.md           # Proje dokümantasyonu
└── bal-eticaret-sitesi-analiz.md  # Tasarım analizi
```

## 🚀 Kullanım

### Hızlı Başlangıç
1. Dosyaları bilgisayarınıza indirin
2. Bir web server başlatın (örn: Live Server, Python HTTP Server)
3. `index.html` dosyasını tarayıcıda açın

### Python ile Local Server
```bash
# Python 3.x
python -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000
```

### Node.js ile Live Server
```bash
npm install -g live-server
live-server
```

## 🎯 Ana Sayfada Bulunanlar

### 1. Header Bölümü
- **Top Bar**: İletişim bilgileri ve kullanıcı linkleri
- **Navigation**: Logo, arama çubuğu, kullanıcı menüleri
- **Main Menu**: Kategoriler ve dropdown menüler

### 2. Hero Section
- **Büyük Başlık**: "Premium Doğal Ballar"
- **Açıklama**: Marka değer önerisi
- **CTA Butonları**: Ürünleri keşfet, premium koleksiyon
- **Floating Elements**: Animasyonlu dekoratif öğeler

### 3. Özellikler Bölümü
- **Ücretsiz Kargo**: 150 TL üzeri
- **Organik Sertifika**: Güvenilirlik
- **30 Gün İade**: Müşteri memnuniyeti
- **Güvenli Ödeme**: SSL koruması

### 4. Kategori Kartları
- **Çiçek Balı**: 12 ürün
- **Kestane Balı**: 8 ürün
- **Çam Balı**: 6 ürün
- **Lavanta Balı**: 4 ürün

### 5. Ürün Showcase
- **Ürün Kartları**: Görsel, bilgi, fiyat, rating
- **Hover Efektleri**: Hızlı görüntüleme ve sepete ekleme
- **Badges**: İndirim, yeni, bestseller etiketleri
- **Aksiyon Butonları**: Favoriye ekleme, boyut seçimi

### 6. Newsletter
- **E-posta Aboneliği**: Özel fırsatlar için kayıt
- **Validation**: E-posta format kontrolü
- **Success/Error Messages**: Kullanıcı geri bildirimi

### 7. Footer
- **Şirket Bilgileri**: Hakkında, iletişim
- **Hızlı Linkler**: Sayfa linkleri
- **Sosyal Medya**: Facebook, Instagram, Twitter, YouTube
- **Yasal Linkler**: Gizlilik, kullanım koşulları

## 🛍️ E-Ticaret Özellikleri

### Alışveriş Sepeti
- **Sidebar Cart**: Sağdan açılan sepet paneli
- **Ürün Ekleme**: Add to cart butonları
- **Miktar Kontrol**: +/- butonları ile miktar ayarlama
- **Toplam Hesaplama**: Real-time fiyat güncellemesi
- **Checkout**: Ödemeye geçiş butonları

### Ürün Yönetimi
- **Quick View**: Modal pencerede ürün önizleme
- **Wishlist**: Favoriler sistemi
- **Product Comparison**: Ürün karşılaştırma
- **Size Selection**: Gramaj seçimi (250g, 500g, 1kg)

### Arama ve Filtreleme
- **Search Bar**: Header'da arama çubuğu
- **Auto Suggestions**: Akıllı öneriler
- **Category Filter**: Kategori bazlı filtreleme
- **Price Range**: Fiyat aralığı filtresi

## 📱 Responsive Tasarım

### Breakpoints
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

### Mobile Optimizations
- **Touch-Friendly**: Büyük dokunma alanları
- **Stacked Layout**: Dikey yerleştirme
- **Simplified Navigation**: Hamburger menü
- **Full-Width Elements**: Mobil için optimize edilmiş boyutlar

## 🎨 Tasarım Sistemi

### Renk Paleti
```css
--primary-gold: #F4D03F      /* Ana altın rengi */
--secondary-gold: #F1C40F    /* İkincil altın */
--dark-brown: #8B4513        /* Koyu kahverengi */
--light-brown: #D2691E       /* Açık kahverengi */
--cream: #FFF8DC             /* Krem rengi */
--forest-green: #228B22      /* Orman yeşili */
```

### Typography Scale
```css
h1: 3rem     /* Ana başlıklar */
h2: 2.5rem   /* Bölüm başlıkları */
h3: 2rem     /* Alt başlıklar */
h4: 1.5rem   /* Kart başlıkları */
Body: 14-16px /* İçerik metni */
```

### Shadows
```css
--shadow-light: 0 2px 10px rgba(0,0,0,0.1)
--shadow-medium: 0 4px 20px rgba(0,0,0,0.15)
--shadow-heavy: 0 8px 30px rgba(0,0,0,0.2)
```

## ⚡ Performance Features

### Optimizations
- **CSS Grid & Flexbox**: Modern layout teknikleri
- **Debounced Events**: Scroll ve resize optimizasyonu
- **Lazy Loading**: Görüntülenmeyen içeriğin gecikmeli yüklenmesi
- **Minified Assets**: Optimize edilmiş dosya boyutları

### Loading Strategies
- **Critical CSS**: Above-the-fold stilleri
- **Font Display Swap**: Web font optimizasyonu
- **Image Optimization**: Responsive image techniques

## 🔧 Geliştirme Notları

### JavaScript Classes
- **ShoppingCart**: Sepet yönetimi
- **Wishlist**: Favoriler sistemi
- **ProductQuickView**: Ürün önizleme
- **Search**: Arama fonksiyonalitesi
- **Newsletter**: E-posta aboneliği
- **SmoothScroll**: Sayfa içi navigasyon
- **LoadingAnimations**: Yükleme animasyonları

### Event Handling
- **Click Events**: Buton etkileşimleri
- **Scroll Events**: Parallax ve fade-in efektleri
- **Form Submissions**: Validation ve geri bildirim
- **Responsive Events**: Ekran boyutu değişiklikleri

## 🚀 Gelecek Güncellemeler

### Planlanan Özellikler
- [ ] **Ürün Filtreleme**: Gelişmiş filtreleme sistemi
- [ ] **User Authentication**: Kullanıcı giriş sistemi
- [ ] **Payment Integration**: Ödeme gateway entegrasyonu
- [ ] **Product Reviews**: Müşteri değerlendirme sistemi
- [ ] **Inventory Management**: Stok yönetimi
- [ ] **Multi-language**: Çoklu dil desteği
- [ ] **Blog Integration**: İçerik yönetim sistemi
- [ ] **Analytics Dashboard**: Satış analytics
- [ ] **Email Templates**: Transactional email tasarımları
- [ ] **Mobile App**: PWA veya native app

### Technical Improvements
- [ ] **Backend Integration**: API geliştirmesi
- [ ] **Database Schema**: Ürün ve kullanıcı veritabanı
- [ ] **SEO Optimization**: Schema markup, meta tags
- [ ] **Security Features**: XSS koruması, CSRF token
- [ ] **Performance Monitoring**: Web vitals takibi
- [ ] **A/B Testing**: Conversion optimization

## 📄 Lisans

Bu proje açık kaynak kodludur ve MIT lisansı altında sunulmaktadır.

## 👨‍💻 Geliştirici

Bu premium bal satışı e-ticaret sitesi, modern web geliştirme teknikleri kullanılarak tasarlanmış ve geliştirilmiştir.

### İletişim
- 📧 E-posta: info@balsepeti.com
- 📱 Telefon: +90 555 123 45 67
- 🌐 Website: www.balsepeti.com

---

**BalSepeti** - Doğanın en saf lezzeti premium doğal ballarla sofralarınızda! 🍯