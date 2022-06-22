import "./searchBox.styles.css";

const SearchBox = ({ className, placeholder, onSearchChange }) => {
  return (
    <div>
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchBox;
