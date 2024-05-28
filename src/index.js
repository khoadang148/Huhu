import React from 'react';
import { createRoot } from 'react-dom/client'; // Cập nhật import
import App from './App';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import store from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom';

// Lấy container element
const container = document.getElementById('root');

// Tạo root từ container
const root = createRoot(container);

// Render ứng dụng với root.render
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
