import axiosInstance from "../api/instance";


const getAllTasks = () => {
    console.log("Fetching all tasks...");
    return axiosInstance.get('/tasks');
};

const addTask = (title) => {
    console.log("Creating new task...");
    return axiosInstance.post('/tasks', { title });
};


const updateTask = (taskId) => {
    console.log(`Marking task ${taskId} as completed...`);
    return axiosInstance.put(`/tasks/${taskId}`);
};

const deleteTask = (taskId) => {
    console.log(`Deleting task ${taskId}...`);
    return axiosInstance.delete(`/tasks/${taskId}`);
};

export {
    getAllTasks,
    addTask,
    updateTask,
    deleteTask,
};
