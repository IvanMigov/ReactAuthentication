const Athentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', {session: false});// sesion = do not set cookie


module.exports = function (app) {
  // app.get('/',function (req, res, next) {
  //   res.send(['water','phone','paper']);
  // });
  app.post('/signup',Athentication.signup);
};