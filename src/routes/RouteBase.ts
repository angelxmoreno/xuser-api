import {Router} from 'express';

export abstract class RouteBase {
    protected name: string;
    protected router: Router;

    protected constructor(name: string) {
        this.name = name;
        this.router = Router();
        this.configureRoutes();
    }

    getName(): string {
        return this.name;
    }

    getRoutes(): Router {
        return this.router;
    }

    abstract configureRoutes(): void;

}