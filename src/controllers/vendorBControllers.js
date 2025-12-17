// Data Vendor B (Distro Modern - CamelCase, Type-Safe)
exports.getVendorB = (req, res) => {
const dataB = [
  {
    "sku": "TSHIRT-001",
    "productName": "Kaos Ijen Crater",
    "price": 75000,
    "isAvailable": true
  },
  {
    "sku": "HAT-002",
    "productName": "Topi Trucker",
    "price": 50000,
    "isAvailable": false
  }

];
res.json(dataB);
}