exports.getVendorA = (req, res) => {
  const vendorAData = [
    {
      kd_produk: "A001",
      nm_brg: "Kopi Bubuk 100g",
      hrg: "15000", // String type
      ket_stok: "ada", // "ada" or "habis"
    },
    {
      kd_produk: "A002",
      nm_brg: "Susu Bubuk 100g",
      hrg: "20000", // String type
      ket_stok: "ada", // "ada" or "habis"
    },
    {
      kd_produk: "A003",
      nm_brg: "Kopi Susu Bubuk 100g",
      hrg: "30000", // String type
      ket_stok: "ada", // "ada" or "habis"
    },
  ];
  res.json(vendorAData);
};
  