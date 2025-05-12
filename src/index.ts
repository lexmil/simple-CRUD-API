import { createServer } from 'http';
import { usersRouter } from './routes/users';

const server = createServer((req, res) => {
	if (req.url?.startsWith('/api/users')) {
		return usersRouter(req, res);
	}

	res.writeHead(404);
	res.end('Not found');
});

server.listen(3000, () => {
	console.log('Server running at http://localhost:3000');
});
