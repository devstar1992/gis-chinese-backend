const fs = require("fs");/* API to create new Item */
const path = require("path");
const query = require('../model/query_gpu');
const lineReader = require('line-reader');
const func = require('./func');
const password_permission = '011235';
const createGpsInfo= async (trackTime)=> {
  const vehicles = await query.get("vehicles", '*');
  const today = func.getDateStringYYYYMMDDHHMMSS(new Date());
  for (let i = 0; i < vehicles.length; i++) {
    const vehicleCompleteItem = await func.getVehicleCompleteItem(vehicles[i]);
    const { device_imei } = vehicleCompleteItem;
    const fileName = path.join(__dirname, '..', `./gps/taxi/${vehicleCompleteItem.license_plate_number}`);
    const gpsFileData = await getFile(fileName);
    if (gpsFileData.status == 0) {
      const gpsData = gpsFileData.item;
      itemLen = gpsData.length;
      if(itemLen < 1) continue;
      let COB = {};
      const gps = gpsData[trackTime%(itemLen-1)];//2:lng, 3:lat
      const info = String(gps).split(',');
      COB.acc = 0;
      COB.direction = 0;
      COB.imei = device_imei;
      COB.gps_time = String(today);
      COB.gps_speed = Number(info[5].trim());
      COB.lat = String(info[3].trim());
      COB.lng = String(info[2].trim());
      const create = await query.create('gps',COB);
    }
  }
}
const getFile = async (fileName) => {
  let item = [];
  return new Promise((resolve, reject) => {
    lineReader.eachLine(fileName, (line, last) => {
      item.push(line);
      if (last === true) return resolve({ status: 0, last: line, item: item });
    }, (err) => {
      return resolve({ status: 240 });
    })
  })
}
const makeGpsInfo = async (req,res) => {
  const password = req.params.password;
  let timeTrial = 0;
  if(password==password_permission) {
    console.log('Gps maker started!');
    res.json('Gps maker started!');
    clearInterval(global.timeIntervalGpsMaker);
    global.timeIntervalGpsMaker = setInterval(()=>{createGpsInfo(timeTrial);timeTrial++;},3000);
  }else{
    console.log('Oops. Password is incorrect.');
    res.json('Oops! Password is incorrect.');
  }
}
const stopGpsInfo = (req,res) => {
  const password = req.params.password;
  if(password==password_permission) {
    console.log('Gps maker stoped!');
    res.json('Gps maker stoped!');
    clearInterval(global.timeIntervalGpsMaker);
  }
}
module.exports = {
  makeGpsInfo:makeGpsInfo,
  stopGpsInfo:stopGpsInfo
}