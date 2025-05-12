import { IncomingMessage, ServerResponse } from 'http';
import { v4 as uuidv4 } from 'uuid';
import { db, User } from '../models/user';
import { isUUID, parseBody } from '../utils/validate';

export const getAllUsers = (_: IncomingMessage, res: ServerResponse) => {
	res.writeHead(200, { 'Content-Type': 'application/json' });
	res.end(JSON.stringify(db));
};

export const getUser = (req: IncomingMessage, res: ServerResponse, id: string) => {
	if (!isUUID(id)) {
		res.writeHead(400);
		res.end('Invalid UUID');
		return;
	}

	const user = db.find(u => u.id === id);
	if (!user) {
		res.writeHead(404);
		res.end('User not found');
		return;
	}

	res.writeHead(200, { 'Content-Type': 'application/json' });
	res.end(JSON.stringify(user));
};

export const createUser = async (req: IncomingMessage, res: ServerResponse) => {
	try {
		const body = await parseBody(req);
		const { username, age, hobbies } = body;

		if (!username || typeof age !== 'number' || !Array.isArray(hobbies)) {
			res.writeHead(400);
			res.end('Invalid user data');
			return;
		}

		const newUser: User = { id: uuidv4(), username, age, hobbies };
		db.push(newUser);
		res.writeHead(201, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify(newUser));
	} catch {
		res.writeHead(400);
		res.end('Invalid JSON');
	}
};

export const updateUser = async (req: IncomingMessage, res: ServerResponse, id: string) => {
	if (!isUUID(id)) {
		res.writeHead(400);
		res.end('Invalid UUID');
		return;
	}

	const index = db.findIndex(u => u.id === id);
	if (index === -1) {
		res.writeHead(404);
		res.end('User not found');
		return;
	}

	try {
		const body = await parseBody(req);
		const { username, age, hobbies } = body;

		if (!username || typeof age !== 'number' || !Array.isArray(hobbies)) {
			res.writeHead(400);
			res.end('Invalid user data');
			return;
		}

		const updatedUser: User = { id, username, age, hobbies };
		db[index] = updatedUser;

		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify(updatedUser));
	} catch {
		res.writeHead(400);
		res.end('Invalid JSON');
	}
};

export const deleteUser = (req: IncomingMessage, res: ServerResponse, id: string) => {
	if (!isUUID(id)) {
		res.writeHead(400);
		res.end('Invalid UUID');
		return;
	}

	const index = db.findIndex(u => u.id === id);
	if (index === -1) {
		res.writeHead(404);
		res.end('User not found');
		return;
	}

	db.splice(index, 1);
	res.writeHead(204);
	res.end();
};
