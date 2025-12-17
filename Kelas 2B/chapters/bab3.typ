
= Arsitektur Sistem Middleware

== Teknologi yang Digunakan
Sistem ini dibangun menggunakan tech stack berikut:
- *Runtime*: Node.js
- *Framework*: Express.js
- *Format Data*: JSON (JavaScript Object Notation)

== Alur Data (Data Flow)
1. *Client Request*: Client (Postman/Browser) mengirim request GET ke `/api/products`.
2. *Router*: `routes/api.js` meneruskan request ke `integratorController.js`.
3. *Fetching*: Integrator mengambil data mentah dari `vendorA`, `vendorB`, dan `vendorC`.
4. *Normalization*: Data mentah di-mapping ke format standar (`id`, `nama`, `harga_final`, `status`, `sumber`).
5. *Response*: JSON terintegrasi dikirim kembali ke Client.