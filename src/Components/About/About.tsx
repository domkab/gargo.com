import { useEffect, useRef, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Spline from '@splinetool/react-spline';

interface Skill {
  name: string;
  percentage: number;
}

export const About: React.FC = () => {
  const skills: Skill[] = [
    { name: 'DAVINCI RESOLVE', percentage: 90 },
    { name: 'BLENDER 3D', percentage: 60 },
    { name: 'PHOTOSHOP', percentage: 85 },
  ];

  const aboutRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [splineLoaded, setSplineLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting && !loaded && splineLoaded) {
          setVisible(true);
          setLoaded(true);
        }
      },
      { threshold: 0.5 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, [loaded, splineLoaded]);

  return (
    <section id="about" className="about" ref={aboutRef}>
      <article className="about__intro">
        <h3 className="about__intro-title">A bit about me</h3>
        <p className="about__intro-desc">
          <span className="about__intro-desc--light">
            I am a Multimedia producer specializing in video production, 3D animation,
            and digital art design.
          </span>

          <span className="about__intro-desc--bold">
            {' '}Transforming ideas into visually compelling experiences.
          </span>
        </p>

        <Spline
          scene="https://prod.spline.design/Wujrfd0K5fBYa-gR/scene.splinecode"
          onLoad={() => setSplineLoaded(true)}
        />
      </article>

      {splineLoaded && (
        <div className="about__skills">
          {skills.map(skill => (
            <div key={skill.name} className="about__skill-container">
              <CircularProgressbar
                value={visible ? skill.percentage : 0}
                text={`${visible ? skill.percentage : 0}%`}
                styles={buildStyles({
                  pathTransition: visible ? 'stroke-dashoffset 2s ease-in-out' : 'none',
                  trailColor: 'transparent',
                })}
                className="about__skill"
              />
              <span className="about__skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
