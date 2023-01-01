import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from './utils/routes';
import './styles/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Router>
      <Routes>
        {
          routes.map((item, i) => {
            return (
              <Route key={i} exact={item.isExact} path={item.path} element={item.component} />
            );
          })
        }
      </Routes>
    </Router>
  // </React.StrictMode>
);