const fs = require("fs");/* API to create new Item */
const path = require("path");
const query = require('../model/query_gpu');
const lineReader = require('line-reader');
const superAdmin="13478915888";
const getVehicleList = async (role,agent_id,phone)=>{
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
    for(let i =0; i< vehicles.length; i++){
      const type_name_db = await query.get("vehicle_types", '*', `Where id = '${vehicles[i].vehicle_type_id}'`);
      if(type_name_db.length>0) vehicles[i].type_name = type_name_db[0].name;
      else vehicles[i].type_name = 'unknown';
    }
    return vehicles;
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
      const gps = trackInfo[i];//2:lng, 3:lat
      const info = String(gps).split(',');
      const speed = Number(info[5].trim());
      // const lat = info[3].trim();
      // const lng = info[2].trim();
      const track_time = info[1].trim();
      if(speed!=0) {
        speed_sum+=speed;
        speed_length++;
        if(track_time_before){//for moving time and total mile
          const time_delta = new Date(track_time).getTime() - track_time_before;
          moving_time += time_delta;
          total_mile += speed*time_delta/60/60/1000;
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
  if(day>0) str += day + 'days';
  str += hour + 'h';
  return str;
}

module.exports = {
    getVehicleList: getVehicleList,
    getSummaryOfTrackInfo:getSummaryOfTrackInfo
  }