import { serviceSpin_2 } from "../../services";
import {Request, Response} from 'express';


export async function spin_2(req: Request, res: Response) {
    try{
        const resultSpin_2 = await serviceSpin_2();
        if(resultSpin_2) {
            const {status, spin_2} = resultSpin_2;
            if(status && spin_2) return res.json({status: status, spin_2: spin_2}).status(200);
            if(!status && !spin_2) return res.json({status: status}).status(200)
        }
    } catch(erro) {

    }
}