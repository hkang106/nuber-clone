import { Options } from 'graphql-yoga';
import app from './app';

const PORT: number | any = process.env.PORT || 4000;
const PLAYGROUND_ENDPOINT: any = '/playground';
const GRAPHQL_ENDPOINT: any = '/graphql';

const appOptions: any = {
	port: PORT,
	playground: PLAYGROUND_ENDPOINT,
	endpoint: GRAPHQL_ENDPOINT
};

const handleAppStart = () => console.log(`Listening on port ${PORT}`);

app.start(appOptions, handleAppStart);
