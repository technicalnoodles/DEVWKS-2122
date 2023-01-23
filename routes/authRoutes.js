const passport = require('passport');

module.exports = (app) => {
  app.get(
    '/auth/cisco',
    passport.authenticate('cisco-spark', { scope: ['spark:all'] })
  );

  app.get(
    '/auth/cisco/callback',
    passport.authenticate('cisco-spark'),
    (req, res) => res.redirect('http://localhost:3001/events')
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
