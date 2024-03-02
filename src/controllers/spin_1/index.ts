import { serviceSpin_1 } from "../../services";
import {Request, Response} from 'express';


export async function spin_1(req: Request, res: Response) {
    try{
        const resultSpin_1 = await serviceSpin_1();
        if(resultSpin_1) {
            const {status, spin_1} = resultSpin_1;
            if(status && spin_1) return res.json({status: status, spin_1: spin_1}).status(200);
            if(!status && !spin_1) return res.json({status: status}).status(200)
        }
    } catch(erro) {

    }
}