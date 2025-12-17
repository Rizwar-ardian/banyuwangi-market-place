= Spesifikasi Data Vendor

Kami menghubungkan tiga vendor dengan karakteristik data yang berbeda:

== Vendor A
- *Format*: `kd_produk`, `nm_brg`, `hrg` (String), `ket_stok`.
- *Tantangan*: Harga dalam format string dan perlu parsing.
- *Controller*: `vendorA_Controllers.js`.

== Vendor B
- *Format*: `sku`, `productName`, `price` (Integer), `isAvailable` (Boolean).
- *Tantangan*: Penamaan field berbeda (`sku` vs `kd_produk`) dan status stok boolean.
- *Controller*: `vendorB_Controllers.js`.

== Vendor C
- *Format*: Nested Object (`details.name`, `pricing.base_price`, `stock`).
- *Tantangan*: Struktur data bertingkat dan harga perlu perhitungan pajak (`tax`).
- *Controller*: `vendorC_Controller.js`.