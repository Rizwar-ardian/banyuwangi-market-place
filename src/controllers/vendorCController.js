// Function untuk mendapatkan data Vendor C
exports.getVendorC = (req, res) => {
  const vendorCData = [
    {
      id: 501,
      details: {
        name: "Nasi Tempong",
        category: "Food",
      },
      pricing: {
        base_price: 20000,
        tax: 2000,
      },
      stock: 50,
    },
  ];
  res.json(vendorCData);
};
