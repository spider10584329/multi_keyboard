import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Check if Preeti font loads successfully
document.fonts.ready.then(() => {
  const preetiLoaded = document.fonts.check('12px Preeti');
  console.log('Preeti font loaded:', preetiLoaded);
  if (!preetiLoaded) {
    console.error('❌ Preeti font failed to load! Check /assets/fonts/Preeti.otf');
  } else {
    console.log('✅ Preeti font loaded successfully!');
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
