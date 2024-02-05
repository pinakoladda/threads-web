import { Button } from "../Button";
import { Navbar } from "../Navbar/Navbar";
import "./index.css";

export const Search = () => {
  return (
    <>
      <Navbar />
      <div className="search__main">
        <label className="search__label" for="mainInput">
          Type your request:
        </label>
        <div className="container">
          <input
            className="search__input"
            placeholder="I'm searching for..."
            id="mainInput"
            name="mainInput"
          ></input>
          <Button className="search__button">Go!</Button>
        </div>
      </div>
    </>
  );
};
