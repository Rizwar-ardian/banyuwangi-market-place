const express = require("express");
const router = express.Router();
const vendorController = require("../controllers/vendorBControllers");
const vendorCController = require("../controllers/vendorCController");

// Mendefinisikan route untuk mendapatkan data Vendor B
router.get("/vendor-b", vendorController.getVendorB);

module.exports = router;

// Mendefinisikan route untuk mendapatkan data Vendor C
router.get("/vendor-c", vendorController.getVendorC);

module.exports = router;
