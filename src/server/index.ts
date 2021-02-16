import express from 'express';
import * as http from 'http';
import * as bodyparser from 'body-parser';
import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors';
import debug from 'debug';
import {RouteBase} from "../routes/RouteBase";
import {UsersRoute} from "../routes/UsersRoute";
import dotenv from "dotenv";

dotenv.config();
const app: express.Application = express();
const server: http.Server = http.createServer(app);
const baseHost: string = process.env.BASE_HOST ?? 'http://localhost';
const rootPath: string = process.env.ROOT_PATH ?? '';
const port: number = process.env.SERVER_PORT ? parseInt(process.env.SERVER_PORT, 10) : 3001;
const routes: RouteBase[] = [];
const debugLog: debug.IDebugger = debug('app');

app.use(bodyparser.json());
app.use(cors());
app.use(expressWinston.logger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    )
}));

routes.push(new UsersRoute());

app.use(expressWinston.errorLogger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    )
}));

app.get(rootPath, (req: express.Request, res: express.Response) => {
    res.status(200).send(`Server running at ${baseHost}${rootPath}:${port}`)
});

server.listen(port, () => {
    debugLog(`Server running at ${baseHost}${rootPath}:${port}`);
    routes.forEach((router: RouteBase) => {
        app.use(rootPath, router.getRoutes());
        debugLog(`Routes configured for ${router.getName()}`);
    });
});