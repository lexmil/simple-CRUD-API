import { User } from './models/user';

export const db: User[] = [
	{
		id: '1e4f8e76-5694-4d35-a0f4-1e9e62cf1c01',
		username: 'alice',
		age: 25,
		hobbies: ['reading', 'gaming']
	},
	{
		id: 'b3a40c1e-6bc4-4f52-9cf1-2fbd95f5fd2e',
		username: 'bob',
		age: 30,
		hobbies: ['cooking', 'cycling']
	},
	{
		id: '91db9480-92e8-4863-870e-659b14b1d3f7',
		username: 'carol',
		age: 22,
		hobbies: ['music', 'drawing']
	},
];

