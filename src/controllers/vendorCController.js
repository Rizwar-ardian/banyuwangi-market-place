/**
 * Controller for Vendor related operations
 */

// Function to handle getting Vendor C data
exports.getVendorC = (req, res) => {
  // Simulated data structure for Vendor C
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

  // Return the data as JSON
  res.json(vendorCData);
};
