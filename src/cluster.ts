import { cpus } from 'node:os';
import cluster from 'cluster';
import { spawn } from 'node:child_process';
import dotenv from 'dotenv';

dotenv.config();

const numCPUs = cpus().length - 1;
const PORT = Number(process.env.PORT) || 4000;

if (cluster.isPrimary) {
	spawn('ts-node', ['src/load-balancer.ts'], {
		stdio: 'inherit',
		env: { ...process.env, PORT: PORT.toString() }
	});

	for (let i = 1; i <= numCPUs; i++) {
		const workerPort = PORT + i;
		spawn('ts-node', ['src/index.ts'], {
			stdio: 'inherit',
			env: { ...process.env, PORT: workerPort.toString() }
		});
	}
}
