
import { Router } from "express";
import { GetAll } from '../controllers/membership'
const membershipRouter = Router();

membershipRouter.route('/membership').get(GetAll);

export default membershipRouter;

// Path: src\api\controllers\whatsapp.ts
