const fs = require("fs");/* API to create new Item */
const path = require("path");
const lineReader = require('line-reader');
let  getGpsInfo = async (req, res) => {
  try{
    const {name} = req.params;
    const fileName = path.join(__dirname, '..', `./gps/taxi/${name}`);
    const gpsData = await getFile(fileName);
    return res.status(200).json(gpsData);
  }catch(err){
    return res.status(400).json(err);
  }
}
const getFile = async (fileName) => {
    let item = [];
    return new Promise((resolve, reject) => {
      lineReader.eachLine(fileName, (line, last) => {
       item.push(line)
       if(last === true)  resolve({list:item,last:line});
      },(err) => {
        reject(err)
      })
    })
}
module.exports = {
  getGpsInfo: getGpsInfo,
}
