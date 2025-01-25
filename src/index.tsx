import ReactDOM from 'react-dom/client';
import './App.scss';
import App from './App';

function initializeReactApp() {
  const rootElement = document.getElementById('root');
    
  if (!rootElement) {
    // eslint-disable-next-line no-console
    console.error("Could not find root element");
    return;
  }

  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <App />
  );
}

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', initializeReactApp);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
