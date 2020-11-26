const query = require('../model/query');
const ctrlFile = require('../file');

let getCameraRegister = async (req, res) => {
  try {
    const { user } = req.body;
    const result = await query.get('camera', '*', '');
    return res.json({ message: 'success', result: result });
  }
  catch (error) {
    return res.status(400).json({
      message: 'Something went wrong.', err: error
    });
  }

};
let editCameraRegister = async (req, res) => {
  try {
    const { user, data } = req.body;
    const camera = await query.get('camera', '*', `Where camera_id='${data.camera_id}' AND NOT id=${data.id}`);
    if (camera.length > 0) return res.status(401).json({ message: 'camera_id doublicated!' })
    data.created_at = new Date().toISOString();
    data.delivery_date = convertYYMMDD(data.delivery_date);
    const result = await query.update('camera', data, `Where id=${data.id}`);
    if (result.affectedRows > 0) {
      return res.json({ message: 'success', result: result });
    } else { res.status(401).json({ message: 'failure', result: result }); }
  }
  catch (error) {
    return res.status(400).json({
      message: 'Something went wrong.', err: error
    });
  }

};
let delCameraRegister = async (req, res) => {
  try {
    const { user, data } = req.body;
    const result = await query.del('camera', `Where id=${data.id}`);

    if (result.affectedRows > 0) {
      return res.json({ message: 'success', result: result });
    } else { res.status(401).json({ message: 'failure', result: result }); }
  }
  catch (error) {
    return res.status(400).json({
      message: 'Something went wrong.', err: error
    });
  }

};
let addCameraRegister = async (req, res) => {
  try {
    const { user, data } = req.body;
    const camera = await query.get('camera', '*', `Where camera_id='${data.camera_id}'`);
    if (camera.length > 0) return res.status(401).json({ message: 'camera_id doublicated!' });
    data.created_at = new Date().toISOString();
    data.delivery_date = convertYYMMDD(data.delivery_date);

    const result = await query.create('camera', data);
    if (result.affectedRows > 0) {
      return res.json({ message: 'success', result: result });
    } else { res.status(401).json({ message: 'failure', result: result }); }
  }
  catch (error) {
    return res.status(400).json({
      message: 'Something went wrong.', err: error
    });
  }

};
let getCameraUserIndividualAll = async (req, res) => {
  try {
    const { user } = req.body;
    const result = await query.get('camera_user_individual', '*', '');
    //for_in
    // const user_company = await query.get('company_user', '*', '');
    const user_individual = await query.get('individual_user', '*', '');
    const camera_user = await query.get('camera_user_individual', '*', '');
    const userlist = getUserList([], user_individual, camera_user);
    const cameraAll = await query.get('camera', 'camera_id', 'Where assign_status="off"');
    return res.json({ message: 'success', result: result, userlist: userlist, cameralist: cameraAll });
  }
  catch (error) {
    return res.status(400).json({
      message: 'Something went wrong.', err: error
    });
  }

};
let editCameraUserIndividualAll = async (req, res) => {
  try {
    const { user, data } = req.body;
    //for double key
    const camera = await query.get('camera_user_individual', '*', `Where camera_id='${data.camera_id}' AND NOT id=${data.id}`);
    const username = await query.get('camera_user_individual', '*', `Where username='${data.username}' AND NOT id=${data.id}`);
    if (camera.length > 0) return res.status(401).json({ message: 'camera_id doublicated!' })
    if (username.length > 0) return res.status(401).json({ message: 'username doublicated!' })
    //for exist
    const camera_exist = await query.get('camera', '*', `Where camera_id='${data.camera_id}'`);
    const username_exist = await query.get('individual_user', '*', `Where username='${data.username}'`);
    if (camera_exist.length == 0) return res.status(401).json({ message: 'camera_id not exist!' })
    if (username_exist.length == 0) return res.status(401).json({ message: 'username not exist!' })
    //for link status
    const beforeCamera = await query.get('camera_user_individual', 'camera_id', `Where id=${data.id}`);
    const camera_off = await query.update('camera', { assign_status: 'off', run_status: 'off' }, `Where camera_id='${beforeCamera[0].camera_id}'`);
    const camera_on = await query.update('camera', { assign_status: 'on', run_status: data.status }, `Where camera_id='${data.camera_id}'`);
    data.created_at = new Date().toISOString();
    data.available_to = convertYYMMDD(data.available_to);
    data.available_from = convertYYMMDD(data.available_from);
    const result = await query.update('camera_user_individual', data, `Where id=${data.id}`);
    if (result.affectedRows > 0) {
      return res.json({ message: 'success', result: result });
    } else { res.status(401).json({ message: 'failure', result: result }); }
  }
  catch (error) {
    return res.status(400).json({
      message: 'Something went wrong.', err: error
    });
  }

};
let delCameraUserIndividualAll = async (req, res) => {
  try {
    const { user, data } = req.body;
    const beforeCamera = await query.get('camera_user_individual', 'camera_id', `Where id=${data.id}`);
    const camera_off = await query.update('camera', { assign_status: 'off', run_status: 'off' }, `Where camera_id='${beforeCamera[0].camera_id}'`);
    const result = await query.del('camera_user_individual', `Where id=${data.id}`);
    if (result.affectedRows > 0) {
      return res.json({ message: 'success', result: result });
    } else { res.status(401).json({ message: 'failure', result: result }); }
  }
  catch (error) {
    return res.status(400).json({
      message: 'Something went wrong.', err: error
    });
  }

};
let addCameraUserIndividualAll = async (req, res) => {
  try {
    const { user, data } = req.body;
    const camera = await query.get('camera_user_individual', '*', `Where camera_id='${data.camera_id}'`);
    const username = await query.get('camera_user_individual', '*', `Where username='${data.username}'`);
    if (camera.length > 0) return res.status(401).json({ message: 'camera_id doublicated!' })
    if (username.length > 0) return res.status(401).json({ message: 'username doublicated!' })
    //for exist
    const camera_exist = await query.get('camera', '*', `Where camera_id='${data.camera_id}'`);
    const username_exist = await query.get('individual_user', '*', `Where username='${data.username}'`);
    if (camera_exist.length == 0) return res.status(401).json({ message: 'camera_id not exist!' })
    if (username_exist.length == 0) return res.status(401).json({ message: 'username not exist!' })
    //for link status
    //  const beforeCamera = await query.get('camera_user', 'camera_id', `Where id=${data.id}`);
    //  const camera_off = await query.update('camera', {assign_status:'off',run_status:'off'}, `Where camera_id='${beforeCamera[0].camera_id}'`);
    const camera_on = await query.update('camera', { assign_status: 'on', run_status: data.status }, `Where camera_id='${data.camera_id}'`);
    data.created_at = new Date().toISOString();
    data.available_to = convertYYMMDD(data.available_to);
    data.available_from = convertYYMMDD(data.available_from);
    const result = await query.create('camera_user_individual', data);
    if (result.affectedRows > 0) {
      return res.json({ message: 'success', result: result });
    } else { return res.status(401).json({ message: 'failure', result: result }); }
  }
  catch (error) {
    return res.status(400).json({
      message: 'Something went wrong.', err: error
    });
  }

};

let getCameraUserCompanyAll = async (req, res) => {
  try {
    const { user } = req.body;
    const result = await query.get('camera_user_company', '*', '');
    //for_in
    const user_company = await query.get('company_user', '*', '');
    const cameraAll = await query.get('camera', 'camera_id', 'Where assign_status="off"');
    return res.json({ message: 'success', result: result, userlist: user_company, cameralist: cameraAll });
  }
  catch (error) {
    return res.status(400).json({
      message: 'Something went wrong.', err: error
    });
  }

};
let editCameraUserCompanyAll = async (req, res) => {
  try {
    const { user, data } = req.body;
    //for double key
    const camera = await query.get('camera_user_company', '*', `Where camera_id='${data.camera_id}' AND NOT id=${data.id}`);
    if (camera.length > 0) return res.status(401).json({ message: 'camera_id doublicated!' })
    //for exist
    const camera_exist = await query.get('camera', '*', `Where camera_id='${data.camera_id}'`);
    const username_exist = await query.get('company_user', '*', `Where company='${data.company}'`);
    if (camera_exist.length == 0) return res.status(401).json({ message: 'camera_id not exist!' })
    if (username_exist.length == 0) return res.status(401).json({ message: 'company not exist!' })
    //for link status
    const beforeCamera = await query.get('camera_user_company', 'camera_id', `Where id=${data.id}`);
    const camera_off = await query.update('camera', { assign_status: 'off', run_status: 'off' }, `Where camera_id='${beforeCamera[0].camera_id}'`);
    const camera_on = await query.update('camera', { assign_status: 'on', run_status: data.status }, `Where camera_id='${data.camera_id}'`);
    data.created_at = new Date().toISOString();
    data.available_to = convertYYMMDD(data.available_to);
    data.available_from = convertYYMMDD(data.available_from);
    const result = await query.update('camera_user_company', data, `Where id=${data.id}`);
    if (result.affectedRows > 0) {
      return res.json({ message: 'success', result: result });
    } else { return res.status(401).json({ message: 'failure', result: result }); }
  }
  catch (error) {
    return res.status(400).json({
      message: 'Something went wrong.', err: error
    });
  }

};
let delCameraUserCompanyAll = async (req, res) => {
  try {
    const { user, data } = req.body;
    const beforeCamera = await query.get('camera_user_company', 'camera_id', `Where id=${data.id}`);
    const camera_off = await query.update('camera', { assign_status: 'off', run_status: 'off' }, `Where camera_id='${beforeCamera[0].camera_id}'`);
    const result = await query.del('camera_user_company', `Where id=${data.id}`);
    if (result.affectedRows > 0) {
      return res.json({ message: 'success', result: result });
    } else { return res.status(401).json({ message: 'failure', result: result }); }
  }
  catch (error) {
    return res.status(400).json({
      message: 'Something went wrong.', err: error
    });
  }

};
let addCameraUserCompanyAll = async (req, res) => {
  try {
    const { user, data } = req.body;
    const camera = await query.get('camera_user_company', '*', `Where camera_id='${data.camera_id}'`);
    if (camera.length > 0) return res.status(401).json({ message: 'camera_id doublicated!' })
    //for exist
    const camera_exist = await query.get('camera', '*', `Where camera_id='${data.camera_id}'`);
    const username_exist = await query.get('company_user', '*', `Where company='${data.company}'`);
    if (camera_exist.length == 0) return res.status(401).json({ message: 'camera_id not exist!' })
    if (username_exist.length == 0) return res.status(401).json({ message: 'company not exist!' })
    //for link status
    const camera_on = await query.update('camera', { assign_status: 'on', run_status: data.status }, `Where camera_id='${data.camera_id}'`);
    data.created_at = new Date().toISOString();
    data.available_to = convertYYMMDD(data.available_to);
    data.available_from = convertYYMMDD(data.available_from);
    const result = await query.create('camera_user_company', data);
    if (result.affectedRows > 0) {
      return res.json({ message: 'success', result: result });
    } else { return res.status(401).json({ message: 'failure', result: result }); }
  }
  catch (error) {
    return res.status(400).json({
      message: 'Something went wrong.', err: error
    });
  }

};
let getCameraUserIndividual = async (req, res) => {
  try {
    const { user } = req.body;
    const result = await query.get('camera_user_individual', '*', '');
    //for_in
    // const user_company = await query.get('company_user', '*', '');
    const user_individual = await query.get('individual_user', '*', '');
    const camera_user = await query.get('camera_user_individual', '*', '');
    const userlist = getUserList([], user_individual, camera_user);
    const cameraAll = await query.get('camera', 'camera_id', 'Where assign_status="off"');
    return res.json({ message: 'success', result: result, userlist: userlist, cameralist: cameraAll });
  }
  catch (error) {
    return res.status(400).json({
      message: 'Something went wrong.', err: error
    });
  }

};
let editCameraUserIndividual = async (req, res) => {
  try {
    const { user, data } = req.body;
    //for double key
    const camera = await query.get('camera_user_individual', '*', `Where camera_id='${data.camera_id}' AND NOT id=${data.id}`);
    const username = await query.get('camera_user_individual', '*', `Where username='${data.username}' AND NOT id=${data.id}`);
    if (camera.length > 0) return res.status(401).json({ message: 'camera_id doublicated!' })
    if (username.length > 0) return res.status(401).json({ message: 'username doublicated!' })
    //for exist
    const camera_exist = await query.get('camera', '*', `Where camera_id='${data.camera_id}'`);
    const username_exist = await query.get('individual_user', '*', `Where username='${data.username}'`);
    if (camera_exist.length == 0) return res.status(401).json({ message: 'camera_id not exist!' })
    if (username_exist.length == 0) return res.status(401).json({ message: 'username not exist!' })
    //for link status
    const beforeCamera = await query.get('camera_user_individual', 'camera_id', `Where id=${data.id}`);
    const camera_off = await query.update('camera', { assign_status: 'off', run_status: 'off' }, `Where camera_id='${beforeCamera[0].camera_id}'`);
    const camera_on = await query.update('camera', { assign_status: 'on', run_status: data.status }, `Where camera_id='${data.camera_id}'`);
    data.created_at = new Date().toISOString();
    data.available_to = convertYYMMDD(data.available_to);
    data.available_from = convertYYMMDD(data.available_from);
    const result = await query.update('camera_user_individual', data, `Where id=${data.id}`);
    if (result.affectedRows > 0) {
      return res.json({ message: 'success', result: result });
    } else { return res.status(401).json({ message: 'failure', result: result }); }
  }
  catch (error) {
    return res.status(400).json({
      message: 'Something went wrong.', err: error
    });
  }

};
let delCameraUserIndividual = async (req, res) => {
  try {
    const { user, data } = req.body;
    const beforeCamera = await query.get('camera_user_individual', 'camera_id', `Where id=${data.id}`);
    const camera_off = await query.update('camera', { assign_status: 'off', run_status: 'off' }, `Where camera_id='${beforeCamera[0].camera_id}'`);
    const result = await query.del('camera_user_individual', `Where id=${data.id}`);
    if (result.affectedRows > 0) {
      return res.json({ message: 'success', result: result });
    } else { return res.status(401).json({ message: 'failure', result: result }); }
  }
  catch (error) {
    return res.status(400).json({
      message: 'Something went wrong.', err: error
    });
  }

};
let addCameraUserIndividual = async (req, res) => {
  try {
    const { user, data } = req.body;
    const camera = await query.get('camera_user_individual', '*', `Where camera_id='${data.camera_id}'`);
    const username = await query.get('camera_user_individual', '*', `Where username='${data.username}'`);
    if (camera.length > 0) return res.status(401).json({ message: 'camera_id doublicated!' })
    if (username.length > 0) return res.status(401).json({ message: 'username doublicated!' })
    //for exist
    const camera_exist = await query.get('camera', '*', `Where camera_id='${data.camera_id}'`);
    const username_exist = await query.get('individual_user', '*', `Where username='${data.username}'`);
    if (camera_exist.length == 0) return res.status(401).json({ message: 'camera_id not exist!' })
    if (username_exist.length == 0) return res.status(401).json({ message: 'username not exist!' })
    //for link status
    //  const beforeCamera = await query.get('camera_user', 'camera_id', `Where id=${data.id}`);
    //  const camera_off = await query.update('camera', {assign_status:'off',run_status:'off'}, `Where camera_id='${beforeCamera[0].camera_id}'`);
    const camera_on = await query.update('camera', { assign_status: 'on', run_status: data.status }, `Where camera_id='${data.camera_id}'`);
    data.created_at = new Date().toISOString();
    data.available_to = convertYYMMDD(data.available_to);
    data.available_from = convertYYMMDD(data.available_from);
    const result = await query.create('camera_user_individual', data);
    if (result.affectedRows > 0) {
      return res.json({ message: 'success', result: result });
    } else { return res.status(401).json({ message: 'failure', result: result }); }
  }
  catch (error) {
    return res.status(400).json({
      message: 'Something went wrong.', err: error
    });
  }

};

let getCameraUserCompany = async (req, res) => {
  try {
    const { user } = req.body;
    const result = await query.get('camera_user_company', '*', '');
    //for_in
    const user_company = await query.get('company_user', '*', '');
    const cameraAll = await query.get('camera', 'camera_id', 'Where assign_status="off"');
    return res.json({ message: 'success', result: result, userlist: user_company, cameralist: cameraAll });
  }
  catch (error) {
    return res.status(400).json({
      message: 'Something went wrong.', err: error
    });
  }

};
let editCameraUserCompany = async (req, res) => {
  try {
    const { user, data } = req.body;
    //for double key
    const camera = await query.get('camera_user_company', '*', `Where camera_id='${data.camera_id}' AND NOT id=${data.id}`);
    if (camera.length > 0) return res.status(401).json({ message: 'camera_id doublicated!' })
    //for exist
    const camera_exist = await query.get('camera', '*', `Where camera_id='${data.camera_id}'`);
    const username_exist = await query.get('company_user', '*', `Where company='${data.company}'`);
    if (camera_exist.length == 0) return res.status(401).json({ message: 'camera_id not exist!' })
    if (username_exist.length == 0) return res.status(401).json({ message: 'company not exist!' })
    //for link status
    const beforeCamera = await query.get('camera_user_company', 'camera_id', `Where id=${data.id}`);
    const camera_off = await query.update('camera', { assign_status: 'off', run_status: 'off' }, `Where camera_id='${beforeCamera[0].camera_id}'`);
    const camera_on = await query.update('camera', { assign_status: 'on', run_status: data.status }, `Where camera_id='${data.camera_id}'`);
    data.created_at = new Date().toISOString();
    data.available_to = convertYYMMDD(data.available_to);
    data.available_from = convertYYMMDD(data.available_from);
    const result = await query.update('camera_user_company', data, `Where id=${data.id}`);
    if (result.affectedRows > 0) {
      return res.json({ message: 'success', result: result });
    } else { return res.status(401).json({ message: 'failure', result: result }); }
  }
  catch (error) {
    return res.status(400).json({
      message: 'Something went wrong.', err: error
    });
  }

};
let delCameraUserCompany = async (req, res) => {
  try {
    const { user, data } = req.body;
    const beforeCamera = await query.get('camera_user_company', 'camera_id', `Where id=${data.id}`);
    const camera_off = await query.update('camera', { assign_status: 'off', run_status: 'off' }, `Where camera_id='${beforeCamera[0].camera_id}'`);
    const result = await query.del('camera_user_company', `Where id=${data.id}`);
    if (result.affectedRows > 0) {
      return res.json({ message: 'success', result: result });
    } else { return res.status(401).json({ message: 'failure', result: result }); }
  }
  catch (error) {
    return res.status(400).json({
      message: 'Something went wrong.', err: error
    });
  }

};
let addCameraUserCompany = async (req, res) => {
  try {
    const { user, data } = req.body;
    const camera = await query.get('camera_user_company', '*', `Where camera_id='${data.camera_id}'`);
    if (camera.length > 0) return res.status(401).json({ message: 'camera_id doublicated!' })
    //for exist
    const camera_exist = await query.get('camera', '*', `Where camera_id='${data.camera_id}'`);
    const username_exist = await query.get('company_user', '*', `Where company='${data.company}'`);
    if (camera_exist.length == 0) return res.status(401).json({ message: 'camera_id not exist!' })
    if (username_exist.length == 0) return res.status(401).json({ message: 'company not exist!' })
    //for link status
    const camera_on = await query.update('camera', { assign_status: 'on', run_status: data.status }, `Where camera_id='${data.camera_id}'`);
    data.created_at = new Date().toISOString();
    data.available_to = convertYYMMDD(data.available_to);
    data.available_from = convertYYMMDD(data.available_from);
    const result = await query.create('camera_user_company', data);
    if (result.affectedRows > 0) {
      return res.json({ message: 'success', result: result });
    } else { return res.status(401).json({ message: 'failure', result: result }); }
  }
  catch (error) {
    return res.status(400).json({
      message: 'Something went wrong.', err: error
    });
  }

};

function getUserList(arr1, arr2, key) {
  let dd = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!check_same(arr1[i].username, key)) {
      dd.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!check_same(arr2[i].username, key)) {
      dd.push(arr2[i]);
    }
  }
  return dd;
}
function check_same(key, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (key == arr[i].username) {
      return true;
    }
  }
  return false;
}
function convertYYMMDD(dd) {
  var year = dd.substring(0, 4);
  var month = dd.substring(5, 7);
  var day = dd.substring(8, 10);
  var date = new Date(year, month, day);
  return date.toISOString();
}
module.exports = {
  getCameraRegister: getCameraRegister,
  editCameraRegister: editCameraRegister,
  delCameraRegister: delCameraRegister,
  addCameraRegister: addCameraRegister,
  getCameraUserIndividual: getCameraUserIndividual,
  editCameraUserIndividual: editCameraUserIndividual,
  delCameraUserIndividual: delCameraUserIndividual,
  addCameraUserIndividual: addCameraUserIndividual,
  getCameraUserCompany: getCameraUserCompany,
  editCameraUserCompany: editCameraUserCompany,
  delCameraUserCompany: delCameraUserCompany,
  addCameraUserCompany: addCameraUserCompany,
  getCameraUserIndividualAll: getCameraUserIndividualAll,
  editCameraUserIndividualAll: editCameraUserIndividualAll,
  delCameraUserIndividualAll: delCameraUserIndividualAll,
  addCameraUserIndividualAll: addCameraUserIndividualAll,
  getCameraUserCompanyAll: getCameraUserCompanyAll,
  editCameraUserCompanyAll: editCameraUserCompanyAll,
  delCameraUserCompanyAll: delCameraUserCompanyAll,
  addCameraUserCompanyAll: addCameraUserCompanyAll,
}
