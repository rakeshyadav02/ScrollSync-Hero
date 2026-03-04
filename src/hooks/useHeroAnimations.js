import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useHeroAnimations({
  sectionRef,
  titleRef,
  statsRef,
  visualRef,
  visualGlowRef,
  ringsRef,
}) {
  useLayoutEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const titleChars = Array.from(title?.querySelectorAll('.hero-title-char') || []);
    const kicker = section?.querySelector('.hero-kicker');
    const stats = statsRef.current.filter(Boolean);
    const introTargets = [kicker, ...titleChars, ...stats].filter(Boolean);
    const visual = visualRef.current;
    const glow = visualGlowRef.current;
    const rings = ringsRef.current.filter(Boolean);

    if (!section || !title || !visual || !glow) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.set(introTargets, {
        autoAlpha: 0,
        y: 44,
      });

      // Scroll-linked text reveal: appears one-by-one on scroll down,
      // and disappears one-by-one when scrolling back up.
      const textRevealTimeline = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=700',
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      textRevealTimeline
        .fromTo(
          kicker,
          {
            y: 36,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.35,
          }
        )
        .fromTo(
          titleChars,
          {
            y: 42,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.45,
            stagger: {
              each: 0.09,
              from: 'start',
            },
          },
          0.05
        )
        .fromTo(
          stats,
          {
            y: 48,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.5,
            stagger: {
              each: 0.2,
              from: 'start',
            },
          },
          0.28
        );

      // Scroll-linked motion with scrubbed interpolation.
      const scrollConfig = {
        trigger: section,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        invalidateOnRefresh: true,
      };

      gsap.fromTo(
        visual,
        {
          x: -320,
          y: 70,
          rotate: 5,
          scale: 0.84,
          force3D: true,
        },
        {
          x: 460,
          y: -150,
          rotate: -16,
          scale: 1.22,
          ease: 'none',
          force3D: true,
          scrollTrigger: scrollConfig,
        }
      );

      gsap.fromTo(
        glow,
        {
          x: 110,
          y: 60,
          scale: 0.9,
          opacity: 0.55,
          force3D: true,
        },
        {
          x: -130,
          y: -50,
          scale: 1.14,
          opacity: 0.88,
          ease: 'none',
          force3D: true,
          scrollTrigger: scrollConfig,
        }
      );

      gsap.fromTo(
        rings,
        {
          y: 28,
          rotate: -8,
          scale: 0.96,
          force3D: true,
        },
        {
          y: -64,
          rotate: 12,
          scale: 1.04,
          stagger: 0.05,
          ease: 'none',
          force3D: true,
          scrollTrigger: scrollConfig,
        }
      );
    }, section);

    return () => ctx.revert();
  }, [sectionRef, titleRef, statsRef, visualRef, visualGlowRef, ringsRef]);
}
