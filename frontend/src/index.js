import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  fetch('/api/hello')
    .then(res => res.json())
    .then(data => console.log(data));

  return <h1>Frontend Connected to Backend</h1>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);