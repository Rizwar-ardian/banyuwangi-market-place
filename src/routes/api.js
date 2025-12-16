const express = require("express");
const router = express.Router();
const vendorAController = require("../controllers/vendorAControllers");
const vendorBController = require("../controllers/vendorB_Controllers");
const vendorCController = require("../controllers/vendorC_Controller");
const integratorController = require("../controllers/integratorController");

// Mendefinisikan route untuk mendapatkan data Vendor A
router.get("/vendor-a", vendorAController.getVendorA);

// Mendefinisikan route untuk mendapatkan data Vendor B
router.get("/vendor-b", vendorBController.getVendorB);

// Mendefinisikan route untuk mendapatkan data Vendor C
router.get("/vendor-c", vendorCController.getVendorC);

// Mendefinisikan route untuk mendapatkan data terintegrasi
router.get("/products", integratorController.getIntegratedProducts);

module.exports = router;
