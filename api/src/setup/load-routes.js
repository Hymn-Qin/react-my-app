import product from './routes/product';
import user from './routes/user';
import crate from './routes/crate';
import subscription from './routes/subscription';
import upload from './routes/upload';

export default function(app) {
	console.info('Server - Load routes..');

	app.use('/api/user', user);
	app.use('/api/product', product);
	app.use('/api/crate', crate);
	app.use('/api/subscription', subscription);
	app.use('/api', upload);
}
