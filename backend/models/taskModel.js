const  mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String},
    priority:{type:String,enum:['Low','High','Medium'],default:'Medium'},
    category:{type:String}
})

const Task = mongoose.model('Task',taskSchema);

module.exports = Task;