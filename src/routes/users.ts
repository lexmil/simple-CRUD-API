import { IncomingMessage, ServerResponse } from 'http';
import { getAllUsers, getUser, createUser, updateUser, deleteUser } from '../controllers/usersController';

export const usersRouter = (req: IncomingMessage, res: ServerResponse) => {
	const urlParts = req.url?.split('/').filter(Boolean);
	const id = urlParts?.[2];

	const isApiUserUrl = urlParts?.[0] === 'api' && urlParts?.[1] === 'users';

	console.log(urlParts);

	if (isApiUserUrl) {
		if (req.method === 'GET' && urlParts?.length === 2) return getAllUsers(req, res);
		if (req.method === 'GET' && urlParts?.length === 3) return getUser(req, res, id!);
		if (req.method === 'POST') return createUser(req, res);
		if (req.method === 'PUT' && urlParts?.length === 3) return updateUser(req, res, id!);
		if (req.method === 'DELETE' && urlParts?.length === 3) return deleteUser(req, res, id!);
	}

	res.writeHead(404);
	res.end('Not found');
};
