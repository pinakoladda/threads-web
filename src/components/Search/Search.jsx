import { useEffect, useState } from "react";
import { Button } from "../Button";
import { Navbar } from "../Navbar/Navbar";
import { PostsList } from "../PostsList/PostsList";
import { useSearchParams } from "react-router-dom";
import { request } from "../../api";
import "./index.css";

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query") || "");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    request.get(`/posts?query=${query}`).then((res) => {
      setPosts(res.data);
    });
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    setSearchParams({ query });
  }, [query]);

  return (
    <>
      <Navbar />
      <div className="search__main">
        <label className="search__label" htmlFor="mainInput">
          Type your request:
        </label>
        <div className="search__container">
          <input
            onChange={handleInputChange}
            value={query}
            className="search__input"
            placeholder="I'm searching for..."
            id="mainInput"
            name="mainInput"
          />
          <Button className="search__button">Go!</Button>
        </div>
        <PostsList posts={posts} />
      </div>
    </>
  );
};
