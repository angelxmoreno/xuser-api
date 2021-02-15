import {Request, Response, Router} from 'express';
import {RouteBase} from "./RouteBase";

export class UsersRoute extends RouteBase {

    constructor() {
        super('UsersRoute');
    }

    configureRoutes() {
        this.router.route(`/users`)
            .get(this.list)
            .post(this.create);
    }

    list(req: Request, res: Response) {
        res.status(200).send(`List of users`);
    }

    create(req: Request, res: Response) {
        res.status(200).send(`Post to users`);
    }
}