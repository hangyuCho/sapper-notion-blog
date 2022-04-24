import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';
const options: compression.CompressionOptions = { threshold: 0 }

polka() // You can also use Express
	.use(
		compression(options),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, (err: any): void => {
			if (err)
				console.log('error', err);
		});
