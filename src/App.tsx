import './App.scss';
import { About } from './Components/About';
import { Header } from './Components/Header';
import { Hero } from './Components/Hero';
import { Works } from './Components/Works';
import { Footer } from './Components/Footer';
import { Loader } from './Components/Loader/Loader';

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type ISourceOptions,
} from "@tsparticles/engine";

import { loadSlim } from "@tsparticles/slim";

const App: React.FC = () => {
  const [init, setInit] = useState(false);
  const [isSplineLoaded, setSplineLoaded] = useState(false);
  const [isAppReady, setAppReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    if (init && isSplineLoaded) {
      setTimeout(() => setAppReady(true), 500);
    }
  }, [init, isSplineLoaded]);

  const handleSplineLoad = () => {
    setSplineLoaded(true);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 30,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 160,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          enable: true,
          random: false,
          speed: 0.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 20,
        },
        opacity: {
          value: 0.25,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <main className="App">
      {!isAppReady && <Loader />}
      {init && (
        <Particles
          id="tsparticles"
          options={options}
        />
      )}
      <Header />
      <Hero />
      <Works />
      <About onSplineLoad={handleSplineLoad} />
      <Footer />

    </main>
  );
}

export default App;
