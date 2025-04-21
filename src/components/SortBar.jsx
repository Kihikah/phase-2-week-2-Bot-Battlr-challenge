const classes = ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"];

function SortBar({ sortBy, setSortBy, filters, setFilters }) {
  const toggleFilter = (cls) => {
    setFilters(filters.includes(cls) ? filters.filter(f => f !== cls) : [...filters, cls]);
  };

  return (
    <div className="sort-bar">
      <label>Sort by:
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="">None</option>
          <option value="health">Health</option>
          <option value="damage">Damage</option>
          <option value="armor">Armor</option>
        </select>
      </label>
      <div className="filters">
        {classes.map(cls => (
          <label key={cls}>
            <input
              type="checkbox"
              checked={filters.includes(cls)}
              onChange={() => toggleFilter(cls)}
            />
            {cls}
          </label>
        ))}
      </div>
    </div>
  );
}

export default SortBar;
