const express = require("express");
const router = express.Router();
const vendorController = require("../controllers/vendorAControllers");
const vendorController = require("../controllers/vendorBControllers");
const vendorController = require("../controllers/vendorCControllers");

// Mendefinisikan route untuk mendapatkan data Vendor A
router.get("/vendor-a", vendorAController.getVendorA);

// Mendefinisikan route untuk mendapatkan data Vendor B
router.get("/vendor-b", vendorBController.getVendorB);

// Mendefinisikan route untuk mendapatkan data Vendor C
router.get("/vendor-c", vendorController.getVendorC);

module.exports = router;