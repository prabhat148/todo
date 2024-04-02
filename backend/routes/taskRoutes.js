const express =require('express');
const  router = express.Router();
const taskController = require('../controller/taskController');


router.post('/add',taskController.CreateTask)
router.get('/',taskController.getAllTasks)
router.get('/:taskId',taskController.getTaskById)
router.put('/:taskId/priority',taskController.updateTaskPriority)
router.put('/:taskId/category',taskController.updateTaskCategory)
router.delete('/:taskId',taskController.deleteTask)



module.exports = router