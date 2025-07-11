import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/hello`)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error("Failed to connect to backend:", err));
  }, []);

  return <h1>Frontend Connected to Backend</h1>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
