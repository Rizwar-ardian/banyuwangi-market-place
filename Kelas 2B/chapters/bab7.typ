= Penutup & Kesimpulan

== Kesimpulan
Middleware Interoperabilitas yang dibangun berhasil mengintegrasikan data dari tiga vendor berbeda tanpa harus mengubah sistem asli masing-masing vendor.
1. *Heterogenitas Data Teratasi*: Perbedaan format nama field dan tipe data berhasil dinormalisasi.
2. *Business Logic Terpusat*: Logika diskon dan pajak diterapkan di layer middleware, memudahkan maintenance.

== Saran Pengembangan
- Menambahkan fitur caching (Redis) untuk mengurangi load ke vendor.
- Implementasi autentikasi (JWT) pada endpoint middleware.