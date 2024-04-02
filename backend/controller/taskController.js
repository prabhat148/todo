
const Task = require('../models/taskModel')


//creating new task
exports.CreateTask = async (req,res)=>{
    try {
        const  task  = new Task(req.body)
        await task.save()
        res.status(200).json(task)
    } catch (error) {
        console.error('Error creating task:', error);
    res.status(500).json({ error: 'Failed to create task' });
    }
}

//get all tasks
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    console.error('Error getting tasks:', error);
    res.status(500).json({ error: 'Failed to get tasks' });
  }
};


// get task by id
exports.getTaskById = async (req, res) => {
  const {taskId} = req.params ;
  try {
     const tasks = await Task.findById(taskId);
     res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get tasks:', error});
  }
}

//update taskspriority

exports.updateTaskPriority = async (req, res) => {
  const { taskId } = req.params;
  const { priority } = req.body;
  
  try {
    const task = await Task.findByIdAndUpdate(taskId, { priority }, { new: true });
    res.json(task);
  } catch (error) {
    console.error('Error updating task priority:', error);
    res.status(500).json({ error: 'Failed to update task priority' });
  }
};


// update task

exports.updateTaskCategory = async (req, res) => {
  const { taskId } = req.params;
  
  
  try {
    const task = await Task.findByIdAndUpdate(taskId, {$set:req.body}, { new: true });
    res.status(200).json(task);
  } catch (error) {
    console.error('Error updating task :', error);
    res.status(500).json({ error: 'Failed to update task ' });
  }
};


// delete task 

exports.deleteTask = async (req, res) => {
  const { taskId } = req.params;
  
  try {
       await Task.findByIdAndDelete(taskId);
    res.status(200).json('deleted successfully');
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ error: 'Failed to delete task' });
  }
};
