const http = require("http");

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

http
  .get("http://localhost:3000/api/integrator", (res) => {
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
