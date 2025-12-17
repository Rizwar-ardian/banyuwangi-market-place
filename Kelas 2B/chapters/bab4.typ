= Implementasi Logika Integrator

Logika integrasi terdapat pada file `controllers/integratorController.js`.

== Normalisasi Data
Setiap vendor memiliki penamaan field yang berbeda. Middleware melakukan mapping sebagai berikut:
- `kd_produk` / `sku` / `id` -> `id`
- `nm_brg` / `productName` / `details.name` -> `nama`
- `hrg` / `price` / `pricing` -> `harga_final`

== Business Logic (Logic Trap)
1. *Vendor A*: Diskon 10% dihitung dengan `Math.round(parseInt(item.hrg) * 0.9)`.
2. *Vendor B*: Status `isAvailable` (boolean) diubah menjadi string "Tersedia" atau "Habis".
3. *Vendor C*: Harga basis ditambah pajak (`base_price + tax`). Produk makanan diberi label "(Recommended)".