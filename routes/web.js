import express from 'express';
import StudentController from '../controller/studentcontroller.js';

const router = express.Router();

router.get('/', StudentController.getAllDoc);
router.post('/', StudentController.createDoc);
router.get('/edit/:Id', StudentController.editDoc);
router.post('/update/:Id', StudentController.updateDocById);
router.post('/delete/:Id', StudentController.deleteDocById);


export default router;
