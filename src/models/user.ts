export type User = {
	id: string;
	username: string;
	age: number;
	hobbies: string[];
};

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
	{
		id: 'f90a85d5-e016-4538-9506-d42a66000475',
		username: 'dave',
		age: 28,
		hobbies: ['photography']
	},
	{
		id: 'e0872f40-f7b5-4a46-8ea4-093b25708d9e',
		username: 'eve',
		age: 35,
		hobbies: ['traveling', 'blogging']
	},
	{
		id: '5b705d30-61b0-4bd0-9288-122b57fd084c',
		username: 'frank',
		age: 40,
		hobbies: ['woodworking']
	},
	{
		id: '0fcbab0b-df33-4e3b-b746-d0bbce76fd48',
		username: 'grace',
		age: 27,
		hobbies: ['yoga', 'gardening']
	},
	{
		id: 'b59e0af8-4a7d-44a2-83d2-22b5e6ef6b4b',
		username: 'heidi',
		age: 19,
		hobbies: ['skating']
	},
	{
		id: '6343e1f9-8397-4891-b52e-9b6cf1473e55',
		username: 'ivan',
		age: 45,
		hobbies: ['fishing', 'chess']
	},
	{
		id: 'dc8f2a1f-33ad-4b95-b2ef-7d3563f81a38',
		username: 'judy',
		age: 32,
		hobbies: ['programming', 'puzzles']
	}
];
