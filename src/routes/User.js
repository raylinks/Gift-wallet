const router = require('express').Router();

import { createUser, getUsers, getOneUser, deleteUser, updateUser} from  '../controllers/AuthenticationController';

router.post('/createuser', createUser);
router.get('/', getUsers);
router.get('/:id',getOneUser);
router.delete('/', deleteUser);
router.put('/:id',updateUser);

module.exports = router;