# DESIGN SYSTEM & STYLE SPECIFICATION (DESIGN.md)

Dokumen ini merupakan hasil ekstraksi cermat dari referensi visual landing page **Convertio** (`Convertio_  Landing Pages Built for Conversions.jpeg`). Seluruh sistem desain telah diadaptasi dengan warna utama baru: **`#011ad9`** (Electric Royal Blue), menggantikan warna oranye dari referensi asli.

---

## 1. Filosofi & Karakteristik Desain (Design Archetype)

- **Style Archetype**: *Clean Modern SaaS / High-Conversion Web Service*
- **Vibe & Atmosphere**: Profesional, terpercaya, modern, bersih (*crisp*), dan berorientasi pada konversi (*high-converting*).
- **Karakter Visual Utama**:
  1. **Pill-Shaped Interactive Elements**: Seluruh tombol (*call-to-action*) dan kolom input formulir menggunakan bentuk *full pill* (`rounded-full`).
  2. **Soft Elevated Floating Cards**: Kartu fitur dan formulir memiliki sudut membulat lebar (`rounded-2xl` s/d `rounded-3xl`) dengan bayangan halus (*diffused soft shadow*) yang menciptakan kesan melayang (*floating*).
  3. **Organic Background Accents**: Latar belakang dihiasi kurva/vektor organik (*soft fluid blobs*) berwarna sangat samar untuk memberi dinamika tanpa mengganggu keterbacaan konten.
  4. **Solid Color Arch Framing**: Penggunaan bingkai lengkung kubah (*arch / pill arch*) berwarna solid primary (`#011ad9`) sebagai *backdrop* elemen grafis/foto subjek.
  5. **High-Contrast Active States**: Kartu yang aktif/terpilih menggunakan warna latar *solid primary* (`#011ad9`) dengan tipografi putih kontras tinggi.
  6. **Micro-Metric & Floating Data Badges**: Kartu data statistik interaktif dengan grafik batang (*progress bar*), skor melingkar (*donut/gauge*), dan angka metrik pengguna aktif.

---

## 2. Palet Warna (Color Palette System)

### 2.1. Primary Color Tokens (`#011ad9`)
Warna utama diganti dari oranye ke `#011ad9` (Electric Royal Blue). Warna ini memberikan impresi teknologi yang kokoh, kredibel, dan modern.

| Token | Hex Code | Deskripsi & Penggunaan |
| :--- | :--- | :--- |
| `primary-50` | `#eef2ff` | Background chip sangat muda, hover kartu terang, tint badge |
| `primary-100` | `#e0e7ff` | Border highlight halus, active state tipis |
| `primary-200` | `#c7d2fe` | Aksen sekunder / ilustrasi line |
| `primary-300` | `#a5b4fc` | Aksen grafis sekunder |
| `primary-400` | `#818cf8` | Border fokus / highlight |
| `primary-500` | `#4f46e5` | Indigo/blue transisi |
| **`primary-600`** | **`#011ad9`** | **WARNA UTAMA (Brand Primary)**: Tombol CTA, background kartu aktif, arch framing |
| `primary-700` | `#0115b0` | Hover state untuk tombol CTA utama |
| `primary-800` | `#001087` | Active / Pressed state untuk tombol |
| `primary-900` | `#000b5e` | Teks primary gelap / brand footer |
| `primary-950` | `#000638` | Deep shadow tint & dark contrast |

### 2.2. Functional & Metric Colors (Aksen Data)
Digunakan pada kartu metrik, chart, grafik pencapaian, dan rating:

| Token | Hex Code | Penggunaan |
| :--- | :--- | :--- |
| `metric-green` | `#10b981` / `#059669` | Bar chart bulanan, gauge score `98`, indikator pertumbuhan positif |
| `metric-green-bg`| `#ecfdf5` | Background badge sukses |
| `accent-star` | `#f59e0b` / `#fbbf24` | Ikon bintang rating & badge testimoni |

### 2.3. Neutral & Surface Colors

| Token | Hex Code | Penggunaan |
| :--- | :--- | :--- |
| `surface-canvas` | `#ffffff` | Background utama halaman web |
| `surface-subtle` | `#f8fafd` | Background alternatif section & kontainer luar |
| `surface-card` | `#ffffff` | Background kartu formulir, kartu fitur, dan floating badges |
| `surface-input` | `#f1f3f9` | Background field input formulir & kontainer ikon fitur |
| `text-primary` | `#111827` | Heading utama, judul kartu, teks berbobot tebal |
| `text-secondary`| `#4b5563` | Paragraf deskripsi, sub-heading, label sekunder |
| `text-muted` | `#9ca3af` | Placeholder form input, teks mikro |
| `text-inverted` | `#ffffff` | Teks di atas tombol CTA & kartu berlatar belakang `#011ad9` |
| `border-subtle` | `#e5e7eb` | Garis pembatas kartu & border floating badge |

---

## 3. Tipografi (Typography)

- **Primary Font Family**: `Plus Jakarta Sans`, `Inter`, atau `system-ui, -apple-system, sans-serif`.
- **Karakteristik Huruf**: Sans-serif geometris modern dengan *aperture* terbuka, bentuk bulat yang bersih, dan keterbacaan tinggi.

### Hierarki & Skala Ukuran Teks

| Level | Size (Desktop) | Size (Mobile) | Weight | Line Height | Tracking | Penggunaan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Title (H1)** | `56px` (`3.5rem`) | `36px` (`2.25rem`) | Bold (700) | `1.15` | `-0.02em` | Judul utama Hero section |
| **Section Title (H2)** | `38px` (`2.375rem`) | `28px` (`1.75rem`) | Bold (700) | `1.2` | `-0.015em` | Judul section fitur |
| **Section Title (H3)** | `24px` (`1.5rem`) | `20px` (`1.25rem`) | Semi-Bold (600) | `1.3` | `-0.01em` | Judul kartu tab / accordion |
| **Card Title** | `18px` (`1.125rem`) | `16px` (`1rem`) | Bold (700) | `1.35` | `normal` | Judul 3-kolom kartu fitur |
| **Body (Large)** | `16px` (`1rem`) | `15px` (`0.938rem`) | Regular (400) | `1.65` | `normal` | Sub-deskripsi Hero & Section |
| **Body (Standard)** | `14px` (`0.875rem`) | `14px` (`0.875rem`) | Regular (400) | `1.6` | `normal` | Teks penjelasan dalam kartu |
| **Button & Input Text**| `15px` (`0.938rem`) | `14px` (`0.875rem`) | Semi-Bold (600) | `1.0` | `0.01em` | Teks tombol CTA & isi formulir |
| **Microcopy / Metric** | `12px` (`0.75rem`) | `11px` (`0.688rem`) | Medium (500) | `1.4` | `0.02em` | Label bulan pada grafik & keterangan kecil |

---

## 4. Spacing, Radii, & Elevation (Bentuk & Bayangan)

### 4.1. Corner Radii (`border-radius`)
- **Pill (`9999px` / `rounded-full`)**:
  - Tombol CTA Navbar ("Register")
  - Tombol aksi Hero ("Watch Video", "Get Started")
  - Input field formulir (`Your Name`, `Your Email`, `Project Details`)
  - Badge lingkaran ikon
- **Cards & Containers (`24px - 32px` / `rounded-3xl`)**:
  - Floating Form Card di Hero section
  - 3-kolom Feature Cards
- **Tab / Accordion Cards (`18px - 20px` / `rounded-2xl`)**:
  - Kartu "Consumer privacy", "Transparency", "Trusted"
  - Floating metric cards ("New User", "User Testimonials")
- **Visual Arch / Frame (`rounded-t-[140px] md:rounded-t-[180px]`)**:
  - Background arch di belakang foto manusia

### 4.2. Box Shadows & Elevation
Gaya bayangan pada referensi adalah *soft ambient blur* yang tidak kaku (*no harsh borders*):

```css
/* Card Standar (Feature & Form) */
--shadow-card: 0 10px 30px -5px rgba(0, 0, 0, 0.05), 0 20px 40px -15px rgba(1, 26, 217, 0.04);

/* Floating Metric Badges (Overlapping) */
--shadow-floating: 0 15px 35px -5px rgba(0, 0, 0, 0.08), 0 5px 15px rgba(0, 0, 0, 0.03);

/* Primary Button Glow saat Hover */
--shadow-button-primary: 0 8px 20px -4px rgba(1, 26, 217, 0.40);
```

---

## 5. Anatomi & Spesifikasi Komponen

### 5.1. Navigation Bar
- **Struktur**:
  - **Logo**: Teks tebal "Convertio" (atau nama brand Anda) didampingi logo mark sirkular bergaya modern dengan warna `#011ad9`.
  - **Menu Tautan**: Berada di tengah ("Demos ▾", "Pages ▾", "Features ▾", "Blog ▾", "Portfolio ▾", "Shop ▾") dengan warna teks `#111827`, hover ke `#011ad9`.
  - **Tombol CTA Kanan**: Tombol pill "Register" berlatar belakang `#011ad9`, teks putih tebal, hover dengan efek sedikit gelap (`#0115b0`) dan *slight elevation*.

### 5.2. Hero Section (Two-Column Asymmetric)
- **Kolom Kiri**:
  - Headline besar tebal: *"Because Your Business Really Matters to Us"*.
  - Paragraf ringkas (*muted grey* `#4b5563`).
  - Tombol CTA Pill: Berwarna `#011ad9` dengan ikon segitiga Play putih dan teks *"Watch Video"*.
- **Kolom Kanan (Floating Form Card)**:
  - Kartu melayang berwarna putih (`#ffffff`), padding `p-8` s/d `p-10`, `rounded-3xl`, dengan `shadow-card`.
  - Judul: *"Start Now!"* (`font-bold text-xl text-gray-900`).
  - Kolom Input:
    - Input nama: *"Your Name"* (pill shape `rounded-full`, background `#f1f3f9`, border none).
    - Input email: *"Your Email"* (pill shape `rounded-full`, background `#f1f3f9`, border none).
    - Input proyek: *"Project Details"* (pill shape `rounded-full`, background `#f1f3f9`, border none).
  - Tombol Submit: *"Get Started"* lebar penuh (*full-width*), pill shape `rounded-full`, background `#011ad9`, warna teks putih tebal.

### 5.3. 3-Card Feature Section ("This platform designed for your success")
- **Header Section**: Rata tengah (*center-aligned*), judul besar didampingi deskripsi 2 baris.
- **Kartu Fitur (3 Kolom)**:
  - Kartu berlatar putih dengan `rounded-3xl`, padding luas (`p-8`), bayangan lembut.
  - **Ikon Bulat**: Kontainer lingkaran berukuran 56px (`rounded-full`) dengan background abu-abu sangat muda (`#f1f3f9`) yang memuat ikon monokrom gelap (misal: target/user, thumbs up/jempol, tombol power/toggle).
  - **Judul Fitur**: Teks tebal rata tengah (*"Effective Target"*, *"Simply works"*, *"Empowering"*).
  - **Deskripsi**: Teks rata tengah abu-abu ringkas 2-3 baris.
  - **Efek Interaktif**: *Slight translate-y-1 lift* saat kursor diarahkan ke kartu (*hover state*).

### 5.4. Split Feature Section ("Privacy and identity management")
- **Kolom Kiri (Interactive Stack / Tab Cards)**:
  - **State Normal (Inactive)**:
    - Background putih (`#ffffff`), `rounded-2xl`, border halus.
    - Judul tebal gelap (*"Consumer privacy"*, *"Trusted"*), deskripsi abu-abu.
    - Link teks: *"View Details →"* berwarna `#011ad9`.
  - **State Aktif (Highlighted)**:
    - Background **Solid `#011ad9`** dengan teks sepenuhnya putih (`#ffffff`).
    - Judul tebal putih (*"Transparency"*).
    - Deskripsi putih dengan opasitas tinggi (90%).
    - Link teks: *"View Details →"* berwarna putih dengan transisi panah bergerak ke kanan saat di-hover.
- **Kolom Kanan (Graphic Collage & Floating Metrik)**:
  - **Background Shape**: Kubah/arch setengah kapsul (`rounded-t-full`) berwarna solid `#011ad9`.
  - **Subjek**: Foto profesional seseorang yang tersenyum (*cutout portrait*) bertumpuk di depan arch.
  - **Floating Badge 1 (Kiri Atas - Bar Chart)**:
    - Kartu putih `rounded-2xl` melayang dengan bayangan lembut.
    - Header: *"New User →"*.
    - Grafik batang bulanan (*February 2.8k*, *March 3.3k*, *April 4.5k*) dengan bilah progress berwarna hijau `#10b981`.
  - **Floating Badge 2 (Kiri Bawah - Star Rating)**:
    - Ikon lencana melingkar dengan aksen bintang.
  - **Floating Badge 3 (Kanan Bawah - User Gauge & Total)**:
    - Kartu putih `rounded-2xl` memuat *"User Testimonials →"*.
    - Diagram lingkaran / gauge progress berwarna hijau memuat angka skor `"98"`.
    - Counter tebal: `"82,980 Active User"`.

---

## 6. Tailwind CSS v4 & v3 Theme Configuration

Gunakan konfigurasi berikut agar dapat langsung diaplikasikan ke project web (misalnya `astrify-web`):

### Tailwind CSS v4 (`index.css` via `@theme`)
```css
@import "tailwindcss";

@theme {
  /* Brand Colors */
  --color-primary: #011ad9;
  --color-primary-hover: #0115b0;
  --color-primary-active: #001087;
  --color-primary-50: #eef2ff;
  --color-primary-100: #e0e7ff;
  --color-primary-200: #c7d2fe;
  --color-primary-600: #011ad9;
  --color-primary-700: #0115b0;

  /* Metric & Accent Colors */
  --color-metric-green: #10b981;
  --color-metric-green-dark: #059669;
  --color-accent-amber: #f59e0b;

  /* Neutrals & Surfaces */
  --color-surface-card: #ffffff;
  --color-surface-input: #f1f3f9;
  --color-surface-subtle: #f8fafd;
  --color-text-main: #111827;
  --color-text-muted: #6b7280;

  /* Typography */
  --font-sans: 'Plus Jakarta Sans', 'Inter', system-ui, -apple-system, sans-serif;

  /* Shadows */
  --shadow-soft-card: 0 10px 30px -5px rgba(0, 0, 0, 0.05), 0 20px 40px -15px rgba(1, 26, 217, 0.04);
  --shadow-floating-badge: 0 15px 35px -5px rgba(0, 0, 0, 0.08), 0 5px 15px rgba(0, 0, 0, 0.03);
  --shadow-primary-glow: 0 8px 20px -4px rgba(1, 26, 217, 0.35);
}
```

---

## 7. Aturan Aksesibilitas & Best Practices (A11y)

1. **Rasio Kontras Warna (WCAG AAA)**:
   - Warna `#011ad9` dengan teks putih (`#ffffff`) memiliki rasio kontras **11.8:1**, melampaui standar tertinggi WCAG AAA (minimal 7:1 untuk teks biasa).
   - Teks gelap `#111827` di atas kartu putih memiliki rasio kontras **16.1:1** (WCAG AAA).
2. **Focus Indicators**:
   - Kolom input dan tombol harus memiliki ring fokus yang terlihat jelas saat navigasi keyboard:
     `focus:outline-none focus:ring-2 focus:ring-[#011ad9] focus:ring-offset-2`.
3. **Minimum Tap Targets**:
   - Semua tombol pill dan input memiliki tinggi minimal `48px` untuk kemudahan interaksi di layar sentuh perangkat bergerak (*mobile*).

---

## 8. Ringkasan Ekstraksi Komponen Kunci (Quick Reference)

| Komponen | Bentuk (*Shape*) | Warna Latar (*Background*) | Warna Teks | Detail Unik |
| :--- | :--- | :--- | :--- | :--- |
| **Navbar CTA Button** | `rounded-full` (Pill) | `#011ad9` | Putih (`#ffffff`) | `px-6 py-2.5`, hover `#0115b0` |
| **Hero Watch Video Button** | `rounded-full` (Pill) | `#011ad9` | Putih (`#ffffff`) | Disertai icon play segitiga |
| **Hero Form Card** | `rounded-3xl` | `#ffffff` | `#111827` | Elevated shadow, form inputs pill |
| **Form Input Fields** | `rounded-full` (Pill) | `#f1f3f9` | `#111827` | Placeholder `#9ca3af`, borderless |
| **Feature Cards (3-Col)** | `rounded-3xl` | `#ffffff` | `#111827` | Lingkaran ikon abu-abu muda, center-aligned |
| **Active Stack Card** | `rounded-2xl` | `#011ad9` | Putih (`#ffffff`) | Arrow link transisi, full solid primary |
| **Arch Visual Frame** | `rounded-t-full` | `#011ad9` | - | Membingkai foto subjek transparan |
| **Metric Badges** | `rounded-2xl` | `#ffffff` | `#111827` / `#10b981` | Progress bar & score gauge hijau |
