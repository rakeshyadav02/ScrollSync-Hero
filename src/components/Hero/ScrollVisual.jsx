export function ScrollVisual({ visualRef, visualGlowRef, ringsRef }) {
  return (
    <div className="hero-visual-zone" aria-hidden="true">
      <div className="hero-ring ring-one" ref={(node) => (ringsRef.current[0] = node)} />
      <div className="hero-ring ring-two" ref={(node) => (ringsRef.current[1] = node)} />
      <div className="hero-glow" ref={visualGlowRef} />
      <div className="hero-object" ref={visualRef}>
        <img src="/car.svg" alt="" loading="eager" />
      </div>
    </div>
  );
}
