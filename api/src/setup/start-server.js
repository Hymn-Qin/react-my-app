import { NODE_ENV, EXPRESS_PORT } from '../env';

export default function(server) {
	console.info('Server - Start server..' + NODE_ENV);

	server.listen(EXPRESS_PORT, (error) => {
		if (error) {
			return console.error(error);
		} else {
			return console.info(`Server running on http://localhost:${EXPRESS_PORT} [${EXPRESS_PORT}]`);
		}
	});
}
