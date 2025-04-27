# 🏦 Personal Finance Tracker

Aplikasi web untuk mencatat, mengelola, dan menganalisis keuangan pribadi yang dibangun dengan React.js.  
Mendukung pencatatan transaksi pemasukan dan pengeluaran, pengelompokan kategori, ringkasan keuangan, riwayat transaksi, filter & sortir, serta tema gelap/terang.

---

## 🚀 Fitur Utama

1. **Transaction Recording**  
   - Tambah pemasukan & pengeluaran dengan tipe, jumlah, tanggal, kategori, dan deskripsi.  
2. **Category Grouping**  
   - Pilih kategori: Food, Transport, Entertainment, Salary, Health, Utilities, Other.  
3. **Financial Summary**  
   - Tiga kartu dinamis: Income, Expense, Balance, dengan animasi pop-up & hover effect.  
4. **Transaction History**  
   - Tabel riwayat lengkap (Date, Type, Amount, Category, Description, Actions).  
   - Filter by Category & Sort by Amount (asc/desc).  
5. **Edit & Delete**  
   - Edit transaksi dengan pre-filled form & tombol “Batal”.  
   - Hapus transaksi (dengan konfirmasi Redux-like) plus toast notification.  
6. **Toast Notifications**  
   - Notifikasi pop-up di pojok atas untuk sukses/tambah/edit/delete.  
7. **Dark/Light Mode**  
   - Toggle tema dengan transisi lembut di seluruh halaman.  
8. **Responsive UI**  
   - Layout vertikal, form full-width, mobile-friendly, modern styling & animasi.

---

## 📦 Instalasi & Jalankan Lokal

Pastikan Node.js (v14+) dan npm sudah terpasang.

```bash
# 1. Clone repositori
git clone https://github.com/<username>/personal-finance-tracker.git
cd personal-finance-tracker

# 2. Install dependencies
npm install

# 3. Jalankan development server
npm start
```
Buka http://localhost:3000 di browser. Aplikasi akan reload otomatis saat kamu simpan perubahan.

## 🛠️ Build & Deploy
Build untuk produksi:
`npm run build`

## 🔧 Struktur Folder
![image](https://github.com/user-attachments/assets/cf4b6708-e9bb-4041-870b-4f2c1881bc97)


## 📋 Daftar Depedensi
- React – UI library
- react-toastify – Toast notifications
- react-icons – Ikon (FaWallet, FaSortUp/Down)
- Vercel (opsional) – Hosting gratis & mudah
- npm – Package manager

## 📝 Catatan Pengembangan
- Context + Hook (TransactionContext + useLocalStorage) untuk state global & persist ke LocalStorage.
- Animate & Styling: CSS transitions, @keyframes, hover effects, modern card UI.
- Validasi Input: required, min="0", sanitasi titik ribuan sebelum parse.
- Filter & Sort: useMemo untuk optimize re-render.

## 👤 Author
Julio Aldrin Purba
– GitHub: @julioaldprb
– LinkedIn: https://www.linkedin.com/in/juliopurba/
