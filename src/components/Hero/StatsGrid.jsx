export function StatsGrid({ stats, statsRef }) {
  return (
    <ul className="stats-grid" aria-label="Impact statistics">
      {stats.map((item, index) => (
        <li
          key={item.label}
          className="stat-card"
          ref={(node) => {
            statsRef.current[index] = node;
          }}
        >
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  );
}
