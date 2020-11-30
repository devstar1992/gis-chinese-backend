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
    const r_u_e = await query.get('agents', '*', `Where admin_name='${username}'`);
    if(r_u_e.length == 0) return res.status(401).json({message: 'Account is incorrect.'})
    //check if password is correct
    const user = r_u_e[0];
    const u_password = user.password;
    const passwordValid = await verifyLaravelPassword(password, u_password);
    if (passwordValid) {
      const ObjForToken={
        name:user.admin_name,
        mail:user.mail_address,
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
    const r_u_e = await query.get('tb_gpu_user', '*', `Where name='${username}'`);
    if(r_u_e.length == 0) return res.status(401).json({message: 'Account is incorrect.'})
    //check if password is correct
    const user = r_u_e[0];
    const u_password = user.password;
    const passwordValid = await verifyLaravelPassword(password, u_password);
    if (passwordValid) {
      const ObjForToken={
        name:user.name,
        mail:user.email,
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
    const r_u_e = await query.get('users', '*', `Where name='${username}'`);
    if(r_u_e.length == 0) return res.status(401).json({message: 'Account is incorrect.'})
    //check if password is correct
    const user = r_u_e[0];
    const u_password = user.password;
    const passwordValid = await verifyLaravelPassword(password, u_password);
    if (passwordValid) {
      const ObjForToken={
        name:user.name,
        mail:user.email,
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
let editPassword = async (req, res) => {
  try {
    const { user, data } = req.body;
    if (data.password == "") return res.status(403).json({ message: 'empty password' })
    const user_system = await query.get('system_user', '*', `Where username='${data.username}'`);
    const user_company = await query.get('company_user', '*', `Where username='${data.username}'`);
    const user_individual = await query.get('individual_user', '*', `Where username='${data.username}'`);
    let result;
    let confirm = [];
    const passwordData = await hashPassword(data.password);
    if (user_system.length > 0) confirm = await query.get('system_user', '*', `Where username="${user.username}"`)
    else if (user_company.length > 0) confirm = await query.get('company_user', '*', `Where username="${user.username}"`)
    else if (user_individual.length > 0) confirm = await query.get('individual_user', '*', `Where username="${user.username}"`)
    if (confirm.length > 0) {
      const passwordValid = await verifyPassword(data.previous, confirm[0].password);
      if (!passwordValid) return res.status(401).json({ message: 'previous password is incorrect!' });
    } else return res.status(401).json({ message: 'Your data do not exist' })

    if (user_system.length > 0) result = await query.update('system_user', { password: passwordData }, `Where username="${user.username}"`)
    else if (user_company.length > 0) result = await query.update('company_user', { password: passwordData }, `Where username="${user.username}"`)
    else if (user_individual.length > 0) result = await query.update('individual_user', { password: passwordData }, `Where username="${user.username}"`)
    if (result.affectedRows > 0) return res.json({ message: 'success', result: result });
    else return res.status(401).json({ message: 'failure', result: result });
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
  editPassword: editPassword,
}
