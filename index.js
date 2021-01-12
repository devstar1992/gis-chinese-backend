const app = require("./app");
const mysql = require('mysql');
const config = require("./config");
global.timeIntervalGpsMaker;
const sqlDB = require("./model/db_gpu");
if (require.main === module) {
  app.listen(config.port);
  sqlDB.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
  });
}
