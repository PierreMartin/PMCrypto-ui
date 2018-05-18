import passport from 'passport';
import User from '../models/user';

/**
 * POST /login
 */
export function login(req, res, next) {
  // Do email and password validation for the server
  passport.authenticate('local', (authErr, user, info) => {
    if (authErr) return next(authErr);

		// unauthorized error (if wrong password or wrong login) :
    if (!user) {
      return res.sendStatus(401);
    }

		// login user :
    return req.logIn(user, (loginErr) => {
      if (loginErr) return res.sendStatus(401);
      return res.sendStatus(200);
    });
  })(req, res, next);
}

/**
 * POST /logout
 */
export function logout(req, res) {
  req.logout();
  res.sendStatus(200);
}

/**
 * POST /signup
 */
export function signUp(req, res, next) {
  const user = new User({
    email: req.body.email,
    password: req.body.password
  });

  User.findOne({ email: req.body.email }, (findErr, existingUser) => {
		// conflict errors :
    if (existingUser) {
      return res.sendStatus(409);
    }

		// create count :
    return user.save((saveErr) => {
      if (saveErr) return next(saveErr);

			// login user :
      return req.logIn(user, (loginErr) => {
        if (loginErr) return res.sendStatus(401);
        return res.sendStatus(200);
      });
    });
  });
}

export default {
  login,
  logout,
  signUp
};
