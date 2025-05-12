import { validate as isValidUUID } from 'uuid';

export const isUUID = (id: string) => isValidUUID(id);

export const parseBody = (req: any): Promise<any> => {
	return new Promise((resolve, reject) => {
		let data = '';
		req.on('data', (chunk: Buffer) => { data += chunk});
		req.on('end', () => {
			try {
				resolve(JSON.parse(data));
			} catch (e) {
				reject(e);
			}
		});
	});
};
