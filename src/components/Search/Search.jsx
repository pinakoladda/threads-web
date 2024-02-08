import { Button } from "../Button";
import { Navbar } from "../Navbar/Navbar";
import "./index.css";

export const Search = () => {
  return (
    <>
      <Navbar />
      <div className="search__main">
        <label className="search__label" htmlFor="mainInput">
          Type your request:
        </label>
        <div className="search__container">
          <input
            className="search__input"
            placeholder="I'm searching for..."
            id="mainInput"
            name="mainInput"
          />
          <Button className="search__button">Go!</Button>
        </div>
      </div>
    </>
  );
};
