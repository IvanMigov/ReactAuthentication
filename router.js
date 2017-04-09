const Athentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', {session: false});// sesion = do not set cookie
const requireSignIn = passport.authenticate('local', {session: false});// sesion = do not set cookie


module.exports = function (app) {
  app.get('/',requireAuth,function (req, res) {
    res.send({hi: 'there'});
  });

  app.post('/signin',requireSignIn, Athentication.signin);
  app.post('/signup',Athentication.signup);
};