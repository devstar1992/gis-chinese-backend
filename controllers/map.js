const { body, validationResult } = require('express-validator');
const query = require('../model/query_gpu');
const superAdmin="13478915888";
let getVehicleInfo = async (req, res) => {
  try {
    const { phone, role, agent} = req.body;
    let db={
      name:'',
      field:''
    };
    if(agent=='all') db={name:'agents',field:'admin_name'}
    else if(role=='admin')  db={name:'agents',field:'id'}
    else if(role=='agent')  db={name:'agents',field:'contact_number'}
    else if(role=='user')  db={name:'vehicles',field:'phone'}
    else {
      return res.status(401).json({message: 'Request is wrong.'})  
    }
    //check if phone exist
    let keyName;
    let r_u_e;
    if(agent=='all') keyName=phone;
    else if(role=='admin') keyName= req.body.agent;
    else keyName=phone;
    
    if(phone==superAdmin&&role=='admin'&&agent=='all'){
      r_u_e = await query.get(`${db.name}`, '*');
    }
    else if(phone!=superAdmin&&role=='admin'&&agent=='all'){
      r_u_e = await query.get(`${db.name}`, '*',`Where 'admin_name'='${phone}'`);
    }
    else{
      r_u_e = await query.get(`${db.name}`, '*', `Where ${db.field}='${keyName}'`);
    }
    if(r_u_e.length == 0) return res.status(401).json({message: 'Request is wrong.'})  
    //***********get vehicle id
    const user = r_u_e[0];
    let vehicles=[];
    if(agent=='all') {
      for(let i =0; i< r_u_e.length; i++){
        const item = await query.get("vehicles", '*', `Where agent_id='${r_u_e[i].id}'`);
        vehicles=vehicles.concat(item);
      }
    }
    else if(role=='user') vehicles =  await query.get("vehicles", '*', `Where phone='${phone}'`)  //when client is user
    else if(role=='agent') vehicles =  await query.get("vehicles", '*', `Where agent_id='${user.id}'`) //when client is agent
    else if(role=='admin') vehicles =  await query.get("vehicles", '*',`Where agent_id='${user.id}'`) //when client is super admin
    let camera=[];
    for(let i=0 ; i < vehicles.length; i++){
      camera = await query.get("tb_camera", '*', `Where vehicle_number='${vehicles[i].id}'`);
      vehicles[i].camera = camera;
    }
    const type = await await query.get("vehicle_types", '*');
    return res.json({result:vehicles,type:type}) 
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
