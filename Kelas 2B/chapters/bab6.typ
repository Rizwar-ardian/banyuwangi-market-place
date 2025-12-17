= Hasil Pengujian (Interoperabilitas)

Pengujian dilakukan dengan membandingkan response dari vendor asli dengan response terintegrasi dari Middleware.

== Test Case 1: Vendor A
Input: `{"kd_produk": "A001", "hrg": "15000"}`
Output Integrator:
```json
{
  "id": "A001",
  "harga_final": 13500, // Diskon 10%
  "sumber": "Vendor A"
}
```

== Test Case 2: Vendor C
Input: `{"details": {"name": "Nasi Tempong"}, "stock": 50}`
Output Integrator:
```json
{
  "nama": "Nasi Tempong (Recommended)",
  "status": "Tersedia",
  "sumber": "Vendor C"
}
```