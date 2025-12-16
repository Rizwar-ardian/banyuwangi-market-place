// Data Vendor B
const getVendorBData = () => {
  return [
    {
      sku: "TSHIRT-001",
      productName: "Kaos Ijen Crater",
      price: 75000,
      isAvailable: true,
    },
    {
      sku: "HAT-002",
      productName: "Topi Trucker",
      price: 50000,
      isAvailable: false,
    },
  ];
};

exports.getVendorBData = getVendorBData;

exports.getVendorB = (req, res) => {
  res.json(getVendorBData());
};
