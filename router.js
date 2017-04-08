const Athentication = require('./controllers/authentication');


module.exports = function (app) {
  // app.get('/',function (req, res, next) {
  //   res.send(['water','phone','paper']);
  // });
  app.post('/signup',Athentication.signup);
};