import { useRef } from 'react';
import { heroStats } from '../../data/stats';
import { StatsGrid } from './StatsGrid';
import { ScrollVisual } from './ScrollVisual';
import { useHeroAnimations } from '../../hooks/useHeroAnimations';

const HERO_TITLE = 'W E L C O M E   I T Z F I Z Z';
const HERO_TITLE_CHARS = Array.from(HERO_TITLE);

export function HeroSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const statsRef = useRef([]);
  const visualRef = useRef(null);
  const visualGlowRef = useRef(null);
  const ringsRef = useRef([]);

  useHeroAnimations({
    sectionRef,
    titleRef,
    statsRef,
    visualRef,
    visualGlowRef,
    ringsRef,
  });

  return (
    <section className="hero" ref={sectionRef} aria-labelledby="hero-title">
      <div className="hero-sticky-shell">
        <div className="hero-content">
          <header className="hero-copy">
            <p className="hero-kicker">Scroll-Driven Experience</p>
            <h1 id="hero-title" ref={titleRef} aria-label={HERO_TITLE}>
              {HERO_TITLE_CHARS.map((character, index) => (
                <span key={`${character}-${index}`} className="hero-title-char" aria-hidden="true">
                  {character === ' ' ? '\u00A0' : character}
                </span>
              ))}
            </h1>
            <StatsGrid stats={heroStats} statsRef={statsRef} />
          </header>
          <ScrollVisual visualRef={visualRef} visualGlowRef={visualGlowRef} ringsRef={ringsRef} />
        </div>
      </div>
    </section>
  );
}
