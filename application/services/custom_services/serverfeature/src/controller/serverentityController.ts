import { Request, Response } from 'express';
import { serverentityService } from '../service/serverentityService';
import { CustomLogger } from '../config/Logger'
let serverentity = new serverentityService();

export class serverentityController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
serverentity.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into serverentityController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from serverentityController.ts: GpCreate');
    })}


}