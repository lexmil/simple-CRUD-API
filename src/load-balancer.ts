import http, { IncomingMessage, ServerResponse } from 'http';

const PORT = Number(process.env.PORT) || 4000;
const NUM_WORKERS = require('os').cpus().length - 1;

let currentWorker = 1;

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
	const targetPort = 4000 + currentWorker;

	const options = {
		hostname: 'localhost',
		port: targetPort,
		path: req.url,
		method: req.method,
		headers: req.headers
	};

	const proxy = http.request(options, (proxiedRes) => {
		res.writeHead(proxiedRes.statusCode || 500, proxiedRes.headers);
		proxiedRes.pipe(res, { end: true });
	});

	req.pipe(proxy, { end: true });

	proxy.on('error', (err) => {
		res.writeHead(500);
		res.end(`Load balancer error: ${err.message}`);
	});

	// Round-robin logic
	currentWorker = currentWorker % NUM_WORKERS + 1;
});

server.listen(PORT, () => {
	console.log(`Load balancer listening on http://localhost:${PORT}`);
});
