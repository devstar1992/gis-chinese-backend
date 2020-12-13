const router = require('express').Router();
const r2 = require("r2");
const getMap = async url => {
  try {
    const response = await r2(url).json;
    return response
  } catch (error) {
    return {status:401,err:error}
  }
};
//middleware
const requireAdmin = require('./middlewares/requireAdmin');
const requireAgent = require('./middlewares/requireAgent');
const requireAuth = require('./middlewares/requireAuth');
//controller
const user = require('./controllers/users');
const map = require('./controllers/map');
const gps = require('./controllers/gps');
const mail = require('./controllers/mail');
const { response } = require('express');
//userlogin, editPassword, resetPassword, get agentlist
router.post('/loginAdmin', user.loginAdmin);
router.post('/loginAgent', user.loginAgent);
router.post('/loginUser', user.loginUser);
router.post('/resetPassword', user.resetPassword);
router.post('/editPassword', user.editPassword);
router.post('/getAgentlist', user.getAgentlist);
//Map
router.post('/getVehicleInfo', [requireAuth], map.getVehicleInfo);
router.post('/getVehicleStatus', [requireAuth], map.getVehicleStatus);
router.post('/getPosition', [requireAuth], map.getPosition);
//gps
router.get('/getGpsInfo/:name', gps.getGpsInfo);
//mail
router.post('/sendGmail',mail.sendGmail);
module.exports = (app) => {
  app.use('/baidu-map',async (req,res)=>{
    const url='http://api.map.baidu.com'+req.url;
    const result= await getMap(url);
    res.json(result)
  })
  app.use('/api', router);
  // app.use((req, res, next) => {
  //   const error = new Error('Not found');
  //   error.status = 404;
  //   next(error);
  // });
  app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
      message: error.message
    });
  });
};
