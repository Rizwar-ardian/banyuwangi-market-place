= Implementasi API Endpoints

Aplikasi mengekspos beberapa endpoint melalui `routes/api.js`.

== Endpoint Vendor Individual
- `GET /api/vendor-a`: Mengembalikan data mentah Vendor A.
- `GET /api/vendor-b`: Mengembalikan data mentah Vendor B.
- `GET /api/vendor-c`: Mengembalikan data mentah Vendor C.

== Endpoint Terintegrasi
- `GET /api/products`: Endpoint utama yang menggabungkan seluruh data vendor.

== Kode Implementation
Menggunakan `router.get()` dari Express untuk mendefinisikan rute dan menghubungkannya dengan fungsi controller yang sesuai.