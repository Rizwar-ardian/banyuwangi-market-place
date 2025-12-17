// Function untuk mendapatkan data Vendor C
const getVendorCData = () => {
  return [
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
};

exports.getVendorCData = getVendorCData;

exports.getVendorC = (req, res) => {
  res.json(getVendorCData());
};
