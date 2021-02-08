import { Request, Response, NextFunction } from "express";
import { serverentityController } from '../controller/serverentityController';


export class Routes {
    private serverentity: serverentityController = new serverentityController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/serverentity').post(this.serverentity.GpCreate);
     }

}