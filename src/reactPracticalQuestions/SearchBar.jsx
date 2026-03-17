import { useState } from "react";

// const Freedom = () => {
//   const names = ["Agalo", "Simon", "Ohure", "James", "Mary", "Ikram"];
//   return <SearchBar names={names} />;
// };

const SearchBar = () => {
  const names = ["Agalo", "Simon", "Ohure", "James", "Mary", "Ikram"];
  const [query, setQuery] = useState("");
  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {filteredNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
