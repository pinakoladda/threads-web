import { IconAdd } from "../Icons/IconAdd";
import { IconHome } from "../Icons/IconHome";
import { IconSearch } from "../Icons/IconSearch";
import { IconFavorite } from "../Icons/IconFavorite";
import { IconProfile } from "../Icons/IconProfile";
import { Button } from "../Button";
import "./index.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Button className="navbar__home-button">
        <IconHome />
      </Button>
      <Button className="navbar__search-button">
        <IconSearch />
      </Button>
      <Button className="navbar__add-button">
        <IconAdd />
      </Button>
      <Button className="navbar__favorite-button">
        <IconFavorite />
      </Button>
      <Button className="navbar__profile-button">
        <IconProfile />
      </Button>
    </nav>
  );
};
