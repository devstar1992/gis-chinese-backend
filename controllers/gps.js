const fs = require("fs");/* API to create new Item */
const path = require("path");
const basic_func = require("./func");
const query = require('../model/query_gpu');
const lineReader = require('line-reader');
const func = require("./func");
const superAdmin="13478915888";
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
let  getGpsTrackingInfo = async (req, res) => {
  try{
    const {car_number,date_from,date_to} = req.body;
    const vehicle = await query.get('vehicles','*',`Where license_plate_number = '${car_number}'`);
    if(vehicle.length>0){
      const vehicleCompleteItem = await func.getVehicleCompleteItem(vehicle[0]);
      const {device_imei} = vehicleCompleteItem;
      const gpsInfo = await func.getGpsInfomationWithTimeQuery(device_imei,date_from,date_to);
      return res.status(200).json({result:gpsInfo});
    }else{
      return res.status(401).json('This vehicle does not exist');
    }
  }catch(err){
    return res.status(401).json('Something went wrong');
  }
}
const getFile = async (fileName) => {
    let item = [];
    return new Promise((resolve, reject) => {
      lineReader.eachLine(fileName, (line, last) => {
      //  item.push(line)
       if(last === true) return resolve({status:0 ,last:line});
      },(err) => {
       return resolve({status:240});
      })
    })
}
const getTrackInfo = async (fileName,date_from,date_to) => {
  let item = [];
  return new Promise((resolve, reject) => {
    lineReader.eachLine(fileName, (line, last) => {
    if(line&&String(line).split(',').length>1){
      const gpsDateText = String(line).split(',')[1].trim();
      const gpsDate = new Date(gpsDateText);
      if(gpsDate>=new Date(date_from)&&gpsDate<new Date(date_to)) item.push(line)
    }
    if(last === true) return resolve({status:0 ,data:item});
    },(err) => {
     return resolve({status:240});
    })
  })
}
//for report page
let  getMovingOverViewInfo = async (req, res) => {
  try{
    const { agent, date_from, date_to, role, phone} = req.body;
    let vehicles = await func.getVehicleList(role,agent,phone);
    let result = [];
    for (let i = 0; i < vehicles.length; i++) {
      const vehicleCompleteItem = await func.getVehicleCompleteItem(vehicles[i]);
      const {device_imei} = vehicleCompleteItem;
      const gpsInfo = await func.getGpsInfomationWithTimeQuery(device_imei,date_from,date_to);
      if(gpsInfo.length > 0) {
        const item = func.getSummaryOfTrackInfo(vehicleCompleteItem,gpsInfo);
        result.push(item);
      }
    }
    return res.status(200).json({res:result});
  }catch(err){
    return res.status(404).json('something went wrong');
  }
}
let  getVideoOverViewInfo = async (req, res) => {
  try{
    const { agent, date_from, date_to, role, phone} = req.body;
    let vehicles = await func.getVehicleList(role,agent,phone);
    let result = [];
    for (let i = 0; i < vehicles.length; i++) {
      const fileName = path.join(__dirname, '..', `./gps/taxi/${vehicles[i].license_plate_number}`);
      const gpsData = await getTrackInfo(fileName,date_from,date_to);
      if(gpsData.status == 0) {
        const gps = gpsData.data;
        const item = func.getSummaryOfTrackInfo(vehicles[i],gps);
        result.push(item);
      }
    }
    return res.status(200).json({res:result});
  }catch(err){
    return res.status(404).json('something went wrong');
  }
}
module.exports = {
  getGpsInfoWithArray:getGpsInfoWithArray,
  getGpsTrackingInfo:getGpsTrackingInfo,
  getMovingOverViewInfo:getMovingOverViewInfo,
  getVideoOverViewInfo:getVideoOverViewInfo,
}
