const {
    addData
  } = require("../queries/data");
  
  const routes = (server) => {
    server.get("/", (req, res, next) => {
      res.send();
      return next();
    })
  
    server.post("/add", addData);
  
  }
  
  module.exports = routes;