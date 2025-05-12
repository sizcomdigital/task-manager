const express = require('express');
const router = express.Router();
const admincontroller = require('../controller/adminController');


router.get("/tasks", admincontroller.getTasks);
router.post('/tasks', admincontroller.addTask);
router.put('/tasks/:id', admincontroller.updateTask);
router.delete('/tasks/:id', admincontroller.deleteTask);


module.exports = router;
