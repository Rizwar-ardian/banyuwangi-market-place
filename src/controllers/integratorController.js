const vendorAController = require("./vendorA_Controllers");
const vendorBController = require("./vendorB_Controllers");
const vendorCController = require("./vendorC_Controllers");

exports.getIntegratedProducts = (req, res) => {
  const vendorAData = vendorAController.getVendorAData();
  const vendorBData = vendorBController.getVendorBData();
  const vendorCData = vendorCController.getVendorCData();

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
