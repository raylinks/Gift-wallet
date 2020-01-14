const router = require('express').Router();

import { createTask} from  '../controllers/TaskController';

router.post('/createtask', createTask);


module.exports = router;