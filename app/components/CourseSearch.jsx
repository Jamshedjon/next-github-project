"use client";
import { useState } from "react";

function CourseSearch({ setCourses }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const getData = async () => {
      const req = await fetch(`/api/search?query=${query}`);
      const data = await req.json();
      setCourses(data);
    };
    getData();
  };
  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        className="search-input"
        value={query}
      />
      <button className="search-button">Search</button>
    </form>
  );
}
export default CourseSearch;
