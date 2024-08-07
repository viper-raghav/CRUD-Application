import express from 'express';
import StudentController from '../controller/studentcontroller.js';

const router = express.Router();

router.get('/', StudentController.getAllDoc);
router.post('/', StudentController.createDoc);
router.get('/edit/:id', StudentController.editDoc);
router.post('/update/:id', StudentController.updateDocById);
router.post('/delete/:id', StudentController.deleteDocById);


export default router;
