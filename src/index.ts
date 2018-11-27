import { Options } from 'graphql-yoga';
import app from './app';
import { createConnection } from 'typeorm';
import connectionOptions from './ormConfig';

const PORT: number | any = process.env.PORT || 4000;
const PLAYGROUND_ENDPOINT: any = '/playground';
const GRAPHQL_ENDPOINT: any = '/graphql';

const appOptions: Options = {
	port: PORT,
	playground: PLAYGROUND_ENDPOINT,
	endpoint: GRAPHQL_ENDPOINT
};

const handleAppStart = () => console.log(`Listening on port ${PORT}`);

createConnection(connectionOptions).then(() => {
	app.start(appOptions, handleAppStart);
});
