import { IconAdd } from "../Icons/IconAdd";
import { IconHome } from "../Icons/IconHome";
import { IconSearch } from "../Icons/IconSearch";
import { IconFavorite } from "../Icons/IconFavorite";
import { IconProfile } from "../Icons/IconProfile";
import "./index.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <button className="navbar__home-button button">
        <IconHome />
      </button>
      <button className="navbar__search-button button">
        <IconSearch />
      </button>
      <button className="navbar__add-button button">
        <IconAdd />
      </button>
      <button className="navbar__favorite-button button">
        <IconFavorite />
      </button>
      <button className="navbar__profile-button button">
        <IconProfile />
      </button>
    </div>
  );
};
