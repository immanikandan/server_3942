import * as mongoose from 'mongoose';
import serverentityModel from '../models/serverentity';
import { CustomLogger } from '../config/Logger'


export class serverentityDao {
    private serverentity = serverentityModel;
    constructor() { }
public GpCreate(serverentityData, callback){
new CustomLogger().showLogger('info', 'Enter into serverentityDao.ts: GpCreate')
let temp = new serverentityModel(serverentityData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from serverentityDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}