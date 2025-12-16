const express = require("express");
const router = express.Router();
const vendorController = require("../controllers/vendorBControllers");

// Define route for getting Vendor b data
router.get("/vendor-b", vendorController.getVendorB);

module.exports = router;

// Define route for getting Vendor c data
router.get("/vendor-c", vendorController.getVendorC);

module.exports = router;
