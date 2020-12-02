const jwtDecode = require('jwt-decode');
const { body, validationResult } = require('express-validator');
const { createToken, hashPassword, hashLaravelPassword, verifyPassword, verifyLaravelPassword } = require('../utils/authentication');
const query = require('../model/query_gpu');
let loginAgent = async (req, res) => {
  const result = validationResult(req); 
  if (!result.isEmpty()) {
    const errors = result.array({ onlyFirstError: true });
    return res.status(422).json({ message: 'Request is wrong.' });
  }
  try {
    const { username, password } = req.body;
    //check request
    if(!username||!password) return res.status(401).json({message: 'Request is wrong.'})
    //check if username exist
    const r_u_e = await query.get('agents', '*', `Where contact_number='${username}'`);
    if(r_u_e.length == 0) return res.status(401).json({message: 'Phone number is incorrect.'})
    //check if password is correct
    const user = r_u_e[0];
    const u_password = user.password;
    const passwordValid = await verifyLaravelPassword(password, u_password);
    if (passwordValid) {
      const ObjForToken={
        name:user.contact_number
      };
      const token = createToken(ObjForToken);
      const decodedToken = jwtDecode(token);
      const expiresAt = decodedToken.exp;
      const userInfo = user;
      return res.json({
        message: 'Authentication successful!',
        token,
        userInfo,
        expiresAt
      });
    } else return res.status(401).json({ message: 'Password is incorrect.'});
  } catch (error) {
    return res.status(400).json({
      message: 'Something went wrong.', err: error
    });
  }
};
let loginAdmin = async (req, res) => {
  const result = validationResult(req); 
  if (!result.isEmpty()) {
    const errors = result.array({ onlyFirstError: true });
    return res.status(422).json({ message: 'Request is wrong.' });
  }
  try {
    const { username, password } = req.body;
    //check request
    if(!username||!password) return res.status(401).json({message: 'Request is wrong.'})
    //check if username exist
    const r_u_e = await query.get('tb_gpu_user', '*', `Where phone_number='${username}'`);
    if(r_u_e.length == 0) return res.status(401).json({message: 'Phone number is incorrect.'})
    //check if password is correct
    const user = r_u_e[0];
    const u_password = user.password;
    const passwordValid = await verifyLaravelPassword(password, u_password);
    if (passwordValid) {
      const ObjForToken={
        name:user.phone_number
      };
      const token = createToken(ObjForToken);
      const decodedToken = jwtDecode(token);
      const expiresAt = decodedToken.exp;
      const userInfo = user;
      return res.json({
        message: 'Authentication successful!',
        token,
        userInfo,
        expiresAt
      });
    } else return res.status(401).json({ message: 'Password is incorrect.'});
  } catch (error) {
    return res.status(400).json({
      message: 'Something went wrong.', err: error
    });
  }
};
let loginUser = async (req, res) => {
  const result = validationResult(req); 
  if (!result.isEmpty()) {
    const errors = result.array({ onlyFirstError: true });
    return res.status(422).json({ message: 'Request is wrong.' });
  }
  try {
    const { username, password } = req.body;
    //check request
    if(!username||!password) return res.status(401).json({message: 'Request is wrong.'})
    //check if username exist
    const r_u_e = await query.get('vehicles', '*', `Where phone='${username}'`);
    if(r_u_e.length == 0) return res.status(401).json({message: 'Phone number is incorrect.'})
    //check if password is correct
    const user = r_u_e[0];
    const u_password = user.password;
    const passwordValid = await verifyLaravelPassword(password, u_password);
    if (passwordValid) {
      const ObjForToken={
        name:user.phone
      };
      const token = createToken(ObjForToken);
      const decodedToken = jwtDecode(token);
      const expiresAt = decodedToken.exp;
      const userInfo = user;
      return res.json({
        message: 'Authentication successful!',
        token,
        userInfo,
        expiresAt
      });
    } else return res.status(401).json({ message: 'Password is incorrect.'});
  } catch (error) {
    return res.status(400).json({
      message: 'Something went wrong.', err: error
    });
  }
};
let resetPassword = async (req, res) => {
  try {
    const { phone, role } = req.body;
    let db={
      name:'',
      field:''
    };
    if(role=='admin')  db={name:'tb_gpu_user',field:'phone_number'}
    else if(role=='agent')  db={name:'agents',field:'contact_number'}
    else if(role=='user')  db={name:'vehicles',field:'phone'}
    //check if phone exist
    const r_u_e = await query.get(`${db.name}`, '*', `Where ${db.field}='${phone}'`);
    if(r_u_e.length == 0) return res.status(401).json({message: 'Phone number is incorrect.'})  
    const password = await hashPassword('12345678');
    const r_update = await query.update(`${db.name}`, { password: password }, `Where ${db.field}='${phone}'`)
    if (r_update.affectedRows > 0) return res.json({ message: 'success', result: '12345678' });
    else return res.status(401).json({ message: 'failure', result: result });
  }
  catch (error) {
    return res.status(400).json({
      message: 'Something went wrong.', err: error
    });
  }
}
let editPassword = async (req, res) => {
  try {
    const { phone, previous, password, role } = req.body;
    let db={
      name:'',
      field:''
    };
    if(role=='admin')  db={name:'tb_gpu_user',field:'phone_number'}
    else if(role=='agent')  db={name:'agents',field:'contact_number'}
    else if(role=='user')  db={name:'vehicles',field:'phone'}
    //check if phone exist
    const r_u_e = await query.get(`${db.name}`, '*', `Where ${db.field}='${phone}'`);
    if(r_u_e.length == 0) return res.status(401).json({message: 'Phone number has a problem.'})  
    const newpassword = await hashPassword(password);
    const oldpassword = r_u_e[0].password;
    //confirm password
    const passwordValid = await verifyPassword(previous, oldpassword);
    if(passwordValid) {
      const r_update = await query.update(`${db.name}`, { password: newpassword }, `Where ${db.field}='${phone}'`)
      if (r_update.affectedRows > 0) return res.json({ message: 'success'});
      else return res.status(401).json({ message: 'failure'});
    }else return res.status(401).json({ message: 'Previous password is incorrect.'});
  }
  catch (error) {
    return res.status(400).json({
      message: 'Something went wrong.', err: error
    });
  }
}
module.exports = {
  loginAgent:loginAgent,
  loginAdmin:loginAdmin,
  loginUser:loginUser,
  resetPassword: resetPassword,
  editPassword: editPassword,
}
