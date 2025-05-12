import { createServer } from 'http';
import dotenv from 'dotenv';
import { usersRouter } from './routes/users';

dotenv.config();

const PORT = Number(process.env.PORT) || 4000;

export const server = createServer((req, res) => {
	try {
		if (req.url?.startsWith('/api/users')) {
			return usersRouter(req, res);
		}

		res.writeHead(404);
		res.end('Not found');
	} catch (error) {
		res.writeHead(500, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify({
			error: 'Internal Server Error',
			message: (error as Error).message || 'Unexpected server error',
		}));
	}
});

server.listen(PORT, () => {
	console.log('Server running at http://localhost:' + PORT);
});
