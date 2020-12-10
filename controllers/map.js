const { body, validationResult } = require('express-validator');
const query = require('../model/query_gpu');
const SuperAdmin = 'Admin';
let getVehicleInfo = async (req, res) => {
  try {
    const { phone, role } = req.body;
    let db={
      name:'',
      field:''
    };
    if(role=='admin')  db={name:'agents',field:'id'}
    else if(role=='agent')  db={name:'agents',field:'contact_number'}
    else if(role=='user')  db={name:'vehicles',field:'phone'}
    else {
      return res.status(401).json({message: 'Request is wrong.'})  
    }
    //check if phone exist
    let keyName;
    if(role=='admin') keyName= req.body.agent;
    else keyName=phone;
    const r_u_e = await query.get(`${db.name}`, '*', `Where ${db.field}='${keyName}'`);
    if(r_u_e.length == 0) return res.status(401).json({message: 'Request is wrong.'})  
    //***********get vehicle id
    const user = r_u_e[0];
    let vehicles=[];
    if(role=='user') vehicles =  await query.get("vehicles", '*', `Where phone='${phone}'`)  //when client is user
    else if(role=='agent') vehicles =  await query.get("vehicles", '*', `Where agent_id='${user.id}'`) //when client is agent
    else if(role=='admin') vehicles =  await query.get("vehicles", '*',`Where agent_id='${user.id}'`) //when client is super admin
    return res.json({result:vehicles}) 
  }
  catch (error) {
    return res.status(400).json({
      message: 'Something went wrong.', err: error
    });
  }
}
let getVehicleStatus = async (req, res) => {
  try {
    const { license_plate_number } = req.body;
    const r_u_e = await query.get('vehicle_status', '*', `Where vehicle_number='${license_plate_number}' ORDER BY time_at DESC LIMIT 1`);
    if(r_u_e.length>0) return res.json({result:r_u_e[0].status})
    else return res.json({result:'unknown'})
  }
  catch (error) {
    return res.status(400).json({
      message: 'Something went wrong.', err: error
    });
  }
}
let getPosition = async (req, res) => {
  try {
    const { id } = req.body;
    const r_c = await query.get('tb_camera', '*', `Where vehicle_number='${id}'`);
    if(r_c.length==0) return res.json({result:[]})
    else{
      let qsentence ='';
      for(let i = 0; i < r_c.length; i++){
        if(i==0) qsentence = 'Where camera_id ='+'"'+ r_c[i].camera_id+'" '
        else qsentence += ' OR camera_id ='+'"'+ r_c[i].camera_id+'" '
      }
      qsentence +='ORDER BY track_time DESC LIMIT 1';
      const r_t = await query.get('track', '*', qsentence);
      return res.json({result:r_t})
    }
  }
  catch (error) {
    return res.status(400).json({
      message: 'Something went wrong.', err: error
    });
  }
}
module.exports = {
  getVehicleInfo: getVehicleInfo,
  getVehicleStatus:getVehicleStatus,
  getPosition:getPosition
}
