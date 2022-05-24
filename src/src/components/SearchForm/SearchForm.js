import "./SearchForm.css";
import { useState } from "react";

export const SearchForm = ({ getPosts }) => {
  const [query, setQuery] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
    getPosts(query.trim());
  };

  return (
    <div className="search">
      <div className="container">
        <form
          className="search__form"
          onSubmit={handleSubmit}
        >
          <label htmlFor="query">Query</label>
          <div className="search__form--body">
            <input
              type="text"
              name="query"
              placeholder="Search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <button type="submit">Search</button>
          </div>
        </form>
      </div>
    </div>
  )
}
