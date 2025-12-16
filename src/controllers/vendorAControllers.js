/**
 * Controller for Vendor A (Warung Legacy)
 * Simulates legacy system with String data types.
 */

exports.getVendorA = (req, res) => {
  const vendorAData = [
    {
      kd_produk: "A001",
      nm_brg: "Kopi Bubuk 100g",
      hrg: "15000", // String type
      ket_stok: "ada", // "ada" or "habis"
    },
  ];
  res.json(vendorAData);
};
  