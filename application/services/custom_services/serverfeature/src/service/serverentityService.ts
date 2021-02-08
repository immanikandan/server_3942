import { Request, Response } from 'express';
import {serverentityDao} from '../dao/serverentityDao';
import { CustomLogger } from '../config/Logger'
let serverentity = new serverentityDao();

export class serverentityService {
    
    constructor() { }
    
    public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into serverentityService.ts: GpCreate')
     const  serverentityData = req.body;
     serverentity.GpCreate(serverentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from serverentityService.ts: GpCreate')
         callback(response);
         });
    }


}