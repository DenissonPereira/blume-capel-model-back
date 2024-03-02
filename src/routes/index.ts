import { Router } from "express";
import {spin_1, spin_2, spin_3} from '../controllers';
export const routes = Router();

routes.get('/spin_12_1', spin_1);
routes.get('/spin_12_2', spin_2);
routes.get('/spin_12_3', spin_3);