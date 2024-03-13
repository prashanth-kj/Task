import express from 'express';
import userController from '../controller/user.js'
const router = express.Router();
  
  router.post('/create',userController.handleCreate);
  router.get('/getData',userController.getUsers);
  router.get('/getData/:id',userController.getUserById);
  router.put('/edit/:id', userController.handleEdit);
  router.delete('/delete/:id', userController.handleDelete);
export default router;