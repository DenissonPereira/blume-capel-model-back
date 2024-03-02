import { serviceSpin_3 } from "../../services";
import {Request, Response} from 'express';


export async function spin_3(req: Request, res: Response) {
    try{
        const resultSpin_3 = await serviceSpin_3();
        if(resultSpin_3) {
            const {status, spin_3} = resultSpin_3;
            if(status && spin_3) return res.json({status: status, spin_3: spin_3}).status(200);
            if(!status && !spin_3) return res.json({status: status}).status(200)
        }
    } catch(erro) {

    }
}