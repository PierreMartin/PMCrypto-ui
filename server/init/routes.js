// import passport from 'passport';
import { controllers, passport as passportConfig } from '../db';

const usersController = controllers && controllers.users;
const blocksController = controllers && controllers.blocks;
const walletController = controllers && controllers.wallet;

// WALLET GET address
// WALLET GET balance
// WALLET POST sendTransaction
// WALLET POST mineBlock
// WALLET GET transactionPool

// BLCKCHN GET block
// BLCKCHN GET blocks
// BLCKCHN GET transaction

export default (app) => {
	// blocks routes
	if (blocksController) {
		app.get('/api/getblocks', blocksController.all);
		app.post('/api/sendTransaction', blocksController.sendTx);
	} else {
		console.warn('blocks routes');
	}

	// wallet routes
	if (walletController) {
		app.get('/api/getaddress', walletController.address);
		app.get('/api/getbalance', walletController.balance);
		app.get('/api/gettransactionpool', walletController.transactionPool);
	} else {
		console.warn('wallet routes');
	}

  // user routes
  if (usersController) {
    app.post('/sessions', usersController.login);
    app.post('/users', usersController.signUp);
    app.delete('/sessions', usersController.logout);
  } else {
    console.warn('users routes');
  }

  /*
  if (passportConfig && passportConfig.google) {
    app.get('/auth/google', passport.authenticate('google', {
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
      ]
    }));

    app.get('/auth/google/callback',
      passport.authenticate('google', {
        successRedirect: '/',
        failureRedirect: '/login'
      })
    );
  }
  */
};
