// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router } from "react-router-dom";

// import App from "./App.jsx";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Router>
//       <App />
//     </Router>
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import RulesPage from './components/RulesPage';
import CodeofConductPage from './components/CodeOfconductPage'
import ProblemStatementPage from './components/ProblemStatementPage'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/rules" element={<RulesPage />} />
        <Route path="/code-of-conduct" element={<CodeofConductPage />} />
        <Route path="/topics" element={<ProblemStatementPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);