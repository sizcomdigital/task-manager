import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskPage from '../pages/taskPage';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<TaskPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;
