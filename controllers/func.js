const fs = require("fs");/* API to create new Item */
const path = require("path");
const query = require('../model/query_gpu');
const lineReader = require('line-reader');
const gpsObserverInterval = 60000;
const superAdmin="13478915888";
let getVehicleList = async (role,agent_id,phone)=>{
    let vehicles = [];
    let agentList = [];
    //get vehicle list
    if(role == 'admin'){
       if(agent_id == 'all'){
        if(phone == superAdmin)    agentList = await query.get('agents', '*');
        else   agentList = await query.get('agents', '*', `Where admin_name='${phone}'`);
        for(let i =0; i< agentList.length; i++){
          const item = await query.get("vehicles", '*', `Where agent_id='${agentList[i].id}'`);
          vehicles=vehicles.concat(item);
        }
       }else{
        vehicles =  await query.get("vehicles", '*',`Where agent_id='${agent_id}'`)
       }
    }
    else if(role == 'agent') vehicles =  await query.get("vehicles", '*',`Where agent_id='${agent_id}'`)
    else vehicles =  await query.get("vehicles", '*',`Where phone='${phone}'`)
    return vehicles;
}
let getVehicleCompleteItem = async (vehicleItem)=>{
  let vehicle = vehicleItem;
  const {id, vehicle_type_id} = vehicle;
  const type = await query.get('vehicle_types','*',`Where id='${vehicle_type_id}'`);
  if(type.length>0) vehicle.type_name = type[0].name;
  else vehicle.type_name = 'unknown';
  const camera = await query.get('tb_camera','*',`Where vehicle_number='${id}'`);
  if(camera.length>0) {
    vehicle.camera_id = camera[0].camera_id;
    vehicle.camera_type = camera[0].camera_type;
    vehicle.camera_status = camera[0].status;
    vehicle.device_imei = camera[0].device_imei;
  }else{
    vehicle.camera_id = 'unknown';
    vehicle.camera_type = 'unknown';
    vehicle.camera_status = '0';
    vehicle.device_imei = 'unknown';
  }
  return vehicle;
}
let getGpsInfomationWithTimeQuery = async (device_imei,from=null,to=null)=>{
  let data = [];
  if(from && to ){
    data = await query.get('gps','*',`Where imei = "${device_imei}" AND gps_time BETWEEN '${getDateStringYYYYMMDDHHMMSS(from)}' AND '${getDateStringYYYYMMDDHHMMSS(to)}'`);
  }else{
    data = await query.get('gps','*',`Where imei = "${device_imei}"`);
  }
  return data;
} 
let getSummaryOfTrackInfo = (carInfo,trackInfo)=>{
    let car = carInfo;
    let speed_sum = 0;
    let speed_length = 0;
    let max_speed = 0;
    let moving_time = 0;
    let total_mile = 0;
    let track_time_before;
    for (let i = 0; i < trackInfo.length; i++) {
      const info = trackInfo[i];
      const speed = Number(info.gps_speed);
      const track_time = info.gps_time;
      if(speed!=0) {
        speed_sum+=speed;
        speed_length++;
        if(track_time_before){//for moving time and total mile
          const time_delta = new Date(track_time).getTime() - track_time_before;
          if(time_delta < gpsObserverInterval) {
            moving_time += time_delta;
            total_mile += speed*time_delta/60/60/1000;
          }
        }
        if(speed>max_speed) max_speed = speed;//for max_speed
      }
      track_time_before = new Date(track_time).getTime();
    }
    car.avg_speed = speed_length==0? speed_sum:Math.floor(speed_sum/speed_length*1000)/1000;
    car.max_speed = Math.floor(max_speed*1000)/1000;
    car.moving_time = getDeltaToDate(Number(moving_time));
    car.total_mile = Math.floor(total_mile*1000)/1000;
    return car;
}
function getDeltaToDate(delta){
  let str = '';
  const day = Math.floor(delta/24/60/60/1000);
  const hour = Math.floor((delta%(24*60*60*1000))/60/60/1000);
  const minute = Math.floor((delta%(60*60*1000))/60/1000);
  const seconds = Math.floor((delta%(60*1000))/1000);
  if(day>0) str += day + 'days ';
  if(hour>0) str += hour + 'h ';
  if(minute>0) str += minute + 'min ';
  if(seconds>0 && day == 0) str += seconds + 's ';
  return str;
}
function getDateStringYYYYMMDDHHMMSS(ss) {
  const getFormat = (text)=>{
    if(text<10) return '0'+text
    else return text;
  }
  const d = new Date(ss);
  const dateFormat =  d.getFullYear()+'-'+getFormat(d.getMonth() + 1)+'-'+getFormat(d.getDate())+' '+getFormat(d.getHours())+':'+getFormat(d.getMinutes())+':'+getFormat(d.getSeconds());
  return  dateFormat;
}
module.exports = {
    getVehicleList: getVehicleList,
    getSummaryOfTrackInfo:getSummaryOfTrackInfo,
    getVehicleCompleteItem:getVehicleCompleteItem,
    getGpsInfomationWithTimeQuery:getGpsInfomationWithTimeQuery,
    getDateStringYYYYMMDDHHMMSS:getDateStringYYYYMMDDHHMMSS,
  }