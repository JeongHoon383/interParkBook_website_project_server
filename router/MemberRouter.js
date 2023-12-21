import express from 'express';
import * as controller from '../controller/MemberController.js';

const router = express.Router();

router.post('/', controller.insertMember);
router.get('/:id', controller.getMemberInfo);

export default router;
