import express from 'express';
import {fetch,create,update, deleteuser,findById} from '../controller/userController.js';
const router = express.Router();
router.get('/fetch', fetch);
router.post('/create', create);
router.put('/update/:id', update);
router.delete('/delete/:id', deleteuser);
router.get('/find/:id', findById);
export default router;