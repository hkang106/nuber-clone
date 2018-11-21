
import { GraphQLServer } from 'graphql-yoga';
//without tsconfig..
//import * as cors from "cors";
//import * as helmet from 'helmet';
//import * as logger from 'morgan';

import cors from "cors";
import helmet from 'helmet';
import logger from 'morgan';
import schema from "./schema";

   

class App {
    public app: GraphQLServer;
    constructor() {
        this.app = new GraphQLServer({});
        this.app = new GraphQLServer({
            schema
        });
        this.middlewares();
    }
    private middlewares = (): void => {
        this.app.express.use(cors())
        this.app.express.use(logger('dev'))
        this.app.express.use(helmet())
    }
}
export default new App().app;