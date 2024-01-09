import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.scss';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Could not find root element");
}
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// const particlesOptions = {
//   particles: {
//     number: {
//       value: 80,
//       density: {
//         enable: true,
//         value_area: 800
//       }
//     },
//     shape: {
//       type: 'circle',
//     },
//     opacity: {
//       value: 0.4,
//       random: false,
//       anim: {
//         enable: false,
//       }
//     },
//     size: {
//       value: 6,
//       random: true,
//       anim: {
//         enable: false,
//       }
//     },
//     line_linked: {
//       enable: false,
//     },
//     move: {
//       enable: true,
//       speed: 2,
//       direction: 'none',
//       random: false,
//       straight: false,
//       out_mode: 'out',
//       bounce: false,
//       attract: {
//         enable: false,
//         rotateX: 600,
//         rotateY: 1200
//       }
//     }
//   },
//   interactivity: {
//     detect_on: 'canvas',
//     events: {
//       onhover: {
//         enable: true,
//         mode: 'bubble'
//       },
//       onclick: {
//         enable: true,
//         mode: 'repulse'
//       },
//       resize: true
//     },
//     modes: {
//       bubble: {
//         distance: 400,
//         size: 40,
//         duration: 2,
//         opacity: 8,
//         speed: 3
//       },
//       repulse: {
//         distance: 200,
//         duration: 0.4
//       }
//     }
//   },
//   retina_detect: true
// };