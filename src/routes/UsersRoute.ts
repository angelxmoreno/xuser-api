import {Application, Request, Response} from 'express';
import {RouteBase} from "./RouteBase";

export class UsersRoute extends RouteBase {

    constructor(app: Application) {
        super(app, 'UsersRoute');
    }

    configureRoutes(): Application {
        this.app.route(`/users`)
            .get(this.list)
            .post(this.create);


        return this.app;
    }

    list(req: Request, res: Response) {
        res.status(200).send(`List of users`);
    }

    create(req: Request, res: Response) {
        res.status(200).send(`Post to users`);
    }
}