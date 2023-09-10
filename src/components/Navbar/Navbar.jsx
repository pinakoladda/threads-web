import { IconAdd } from "../IconAdd";
import { IconFavorite } from "../IconFavorite";
import { IconHome } from "../IconHome";
import { IconProfile } from "../IconProfile";
import { IconSearch } from "../IconSearch";
import "./index.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <IconHome />
      <IconSearch />
      <IconAdd />
      <IconFavorite />
      <IconProfile />
    </div>
  );
};
