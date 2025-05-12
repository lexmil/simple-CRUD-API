import { IncomingMessage, ServerResponse } from 'http';
import { getAllUsers, getUser, createUser, updateUser, deleteUser } from '../controllers/usersController';

export const usersRouter = (req: IncomingMessage, res: ServerResponse) => {
	const urlParts = req.url?.split('/').filter(Boolean);
	const id = urlParts?.[1];

	if (req.method === 'GET' && req.url === '/api/users') return getAllUsers(req, res);
	if (req.method === 'GET' && urlParts?.length === 2) return getUser(req, res, id!);
	if (req.method === 'POST' && req.url === '/api/users') return createUser(req, res);
	if (req.method === 'PUT' && urlParts?.length === 2) return updateUser(req, res, id!);
	if (req.method === 'DELETE' && urlParts?.length === 2) return deleteUser(req, res, id!);

	res.writeHead(404);
	res.end('Not found');
};
