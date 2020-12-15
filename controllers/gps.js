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
    return res.status(200).json({status:240});
  }
}
let getGpsInfoWithArray = async (req, res) => {
  try{
    let item = [];
    for(let i =0 ; i < req.body.length; i++){
      const name = req.body[i].license_plate_number;
      const fileName = path.join(__dirname, '..', `./gps/taxi/${name}`);
      const gpsData = await getFile(fileName);
      item.push(gpsData);
    }
    return res.status(200).json(item);
  }catch(err){
    return res.status(200).json([]);
  }
}
const getFile = async (fileName) => {
    let item = [];
    return new Promise((resolve, reject) => {
      lineReader.eachLine(fileName, (line, last) => {
       item.push(line)
       if(last === true) return resolve({status:0,list:item,last:line});
      },(err) => {
       return resolve({status:240});
      })
    })
}
module.exports = {
  getGpsInfo: getGpsInfo,
  getGpsInfoWithArray:getGpsInfoWithArray,
}
