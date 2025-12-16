const express = require("express");
const router = express.Router();
const vendorController = require("../controllers/vendorController");

// Define route for getting Vendor C data
router.get("/vendor-c", vendorController.getVendorC);

module.exports = router;
