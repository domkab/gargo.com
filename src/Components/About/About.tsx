import { useRef } from 'react';
import Spline from '@splinetool/react-spline';
import blenderLogo from '../../icons/skills/Blender_logo.svg';
import MDLogo from '../../icons/skills/MD_logo.svg';
import davinciLogo from '../../icons/skills/Davinci_logo.svg';
import aeLogo from '../../icons/skills/AE_logo.svg';
import emberLogo from '../../icons/skills/embergen-icon.svg';
import psLogo from '../../icons/skills/Ps_logo.svg';

interface AboutProps {
  onSplineLoad: () => void
}

export const About: React.FC<AboutProps> = ( {onSplineLoad} ) => {
  const aboutRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="container">
        <div className="about__content">
          <article className="about__intro">
            <h3 className="about__intro-title">A bit about me</h3>
            <p className="about__intro-desc">
              <span className="about__intro-desc--light">
                I am a 3D artist specializing in animation, modeling & texturing, rendering & compositing
              </span>
              <span className="about__intro-desc--bold">
                {' '}Transforming ideas into visually compelling experiences.
              </span>
            </p>
          </article>
          <Spline
            className="about__spline"
            scene="https://prod.spline.design/Wujrfd0K5fBYa-gR/scene.splinecode"
            onLoad={onSplineLoad}
          />
          <div className="about__skills--container">
            <div className="about__skills">
              <img className="about__skill" src={blenderLogo} alt="Blender" />
              <img className="about__skill" src={MDLogo} alt="MD" />
              <img className="about__skill" src={davinciLogo} alt="Blender" />
            </div>

            <div className="about__skills">
              <img className="about__skill" src={aeLogo} alt="Blender" />
              <img className="about__skill" src={emberLogo} alt="Blender" />
              <img className="about__skill" src={psLogo} alt="Blender" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}