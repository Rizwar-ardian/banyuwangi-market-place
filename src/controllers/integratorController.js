const vendorAController = require("./vendorA_Controllers");
const vendorBController = require("./vendorB_Controllers");
const vendorCController = require("./vendorC_Controller");

exports.getIntegratedProducts = (req, res) => {
  const vendorAData = [
    {
      kd_produk: "A001",
      nm_brg: "Kopi Bubuk 100g",
      hrg: "15000",
      ket_stok: "ada",
    },
  ];

  const vendorBData = [
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

  const integratedData = [];

  // Process Vendor A
  vendorAData.forEach((item) => {
    integratedData.push({
      id: item.kd_produk,
      nama: item.nm_brg,
      harga_final: Math.round(parseInt(item.hrg) * 0.9), // Apply 10% discount
      status: item.ket_stok === "ada" ? "Tersedia" : "Habis",
      sumber: "Vendor A",
    });
  });

  // Process Vendor B
  vendorBData.forEach((item) => {
    integratedData.push({
      id: item.sku,
      nama: item.productName,
      harga_final: item.price,
      status: item.isAvailable ? "Tersedia" : "Habis",
      sumber: "Vendor B",
    });
  });

  // Process Vendor C
  vendorCData.forEach((item) => {
    let finalPrice = item.pricing.base_price + item.pricing.tax;
    let productName = item.details.name;
    if (item.details.category === "Food") {
      productName += " (Recommended)";
    }
    integratedData.push({
      id: item.id.toString(),
      nama: productName,
      harga_final: finalPrice,
      status: item.stock > 0 ? "Tersedia" : "Habis",
      sumber: "Vendor C",
    });
  });

  res.json(integratedData);
};
