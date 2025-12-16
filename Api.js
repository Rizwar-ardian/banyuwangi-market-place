const express = require("express");
const router = express.Router();
const vendorAController = require("../controllers/vendorAControllers");
const vendorBController = require("../controllers/vendorBControllers");
const vendorCController = require("../controllers/vendorCController");

// Mendefinisikan route untuk mendapatkan data Vendor A
router.get("/vendor-a", vendorAController.getVendorA);

// Mendefinisikan route untuk mendapatkan data Vendor B
router.get("/vendor-b", vendorBController.getVendorB);

// Mendefinisikan route untuk mendapatkan data Vendor C
router.get("/vendor-c", vendorCController.getVendorC);

module.exports = router;
http
  .get("http://localhost:3000/api/vendor-a", (res) => {
    let data = "";
    res.on("data", (chunk) => {
      data += chunk;
    });
    res.on("end", () => { 
      console.log(data);
    });
  })
  .on("error", (err) => {
    console.log("Error: " + err.message);
  });


http
  .get("http://localhost:3000/api/vendor-b", (res) => {
    let data = "";
    res.on("data", (chunk) => {
      data += chunk;
    });
    res.on("end", () => { 
      console.log(data);
    });
  })
  .on("error", (err) => {
    console.log("Error: " + err.message);
  });

  http
  .get("http://localhost:3000/api/vendor-c", (res) => {
    let data = "";
    res.on("data", (chunk) => {
      data += chunk;
    });
    res.on("end", () => {
      console.log(data);
    });
  })
  .on("error", (err) => {
    console.log("Error: " + err.message);
  });
