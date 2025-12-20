const express = require("express");
const router = express.Router();
const vendorAController = require("../controllers/vendorA_Controllers");
const vendorBController = require("../controllers/vendorB_Controllers");
const vendorCController = require("../controllers/vendorC_Controllers");
const integratorController = require("../controllers/integratorController");

// Mendefinisikan route untuk mendapatkan data Vendor A
router.get("/vendor-a", vendorAController.getVendorA);

// Mendefinisikan route untuk mendapatkan data Vendor B
router.get("/vendor-b", vendorBController.getVendorB);

// Mendefinisikan route untuk mendapatkan data Vendor C
router.get("/vendor-c", vendorCController.getVendorC);

// Mendefinisikan route untuk mendapatkan data Integrator
router.get("/integrator", integratorController.getIntegratedProducts);

module.exports = router;
