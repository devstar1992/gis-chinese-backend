const router = require('express').Router();
//middleware
const requireAdmin = require('./middlewares/requireAdmin');
const requireAgent = require('./middlewares/requireAgent');
const requireAuth = require('./middlewares/requireAuth');
//controller
const user = require('./controllers/users');
const map = require('./controllers/map');
const mail = require('./controllers/mail');
//userlogin, editPassword, resetPassword
router.post('/loginAdmin', user.loginAdmin);
router.post('/loginAgent', user.loginAgent);
router.post('/loginUser', user.loginUser);
router.post('/resetPassword', user.resetPassword);
router.post('/editPassword', user.editPassword);
//Map
router.post('/getVehicleInfo', [requireAuth], map.getVehicleInfo);
router.post('/getVehicleStatus', [requireAuth], map.getVehicleStatus);
router.post('/getPosition', [requireAuth], map.getPosition);
//mail
router.post('/sendGmail',mail.sendGmail);
module.exports = (app) => {
  app.use('/api', router);
  app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
  });
  app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
      message: error.message
    });
  });
};
