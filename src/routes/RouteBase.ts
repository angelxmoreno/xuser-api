import {Application} from 'express';

export abstract class RouteBase {
    protected name: string;
    protected app: Application;

    protected constructor(app: Application, name: string) {
        this.name = name;
        this.app = app;
        this.configureRoutes();
    }

    getName() {
        return this.name;
    }
    abstract configureRoutes(): Application;

}