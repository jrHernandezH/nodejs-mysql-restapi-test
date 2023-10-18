import { Router } from 'express';
import { deleteEmployees, getEmployee, getEmployees, setEmployees, updateEmployees } from '../controllers/employees.controller.js';

const router = Router();

router.get('/employees', getEmployees);

router.get('/employees/:id', getEmployee);

router.post('/employees', setEmployees);

router.patch('/employees/:id', updateEmployees);

router.delete('/employees/:id', deleteEmployees);

export default router;