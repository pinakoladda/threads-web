import { IconAdd } from "../Icons/IconAdd";
import { IconHome } from "../Icons/IconHome";
import { IconSearch } from "../Icons/IconSearch";
import { IconFavorite } from "../Icons/IconFavorite";
import { IconProfile } from "../Icons/IconProfile";
import { Button } from "../Button";
import { Popup } from "../Popup";
import { CreatePost } from "../CreatePost";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth/useAuth";
import { Link } from "react-router-dom";

import "./index.css";

export const Navbar = () => {
  const { user } = useAuth();
  const [visible, setVisible] = useState();
  return (
    <nav className="navbar">
      <Link to="/">
        <Button className="navbar__home-button">
          <IconHome />
        </Button>
      </Link>
      <Link to="/search">
        <Button className="navbar__search-button">
          <IconSearch />
        </Button>
      </Link>
      <Button className="navbar__add-button" onClick={() => setVisible(true)}>
        <IconAdd />
      </Button>
      <Link to="/notifications">
        <Button className="navbar__favorite-button">
          <IconFavorite />
        </Button>
      </Link>
      <Link to={`/user/${user?.login}`}>
        <Button className="navbar__profile-button">
          {user?.avatar ? (
            <img className="navbar__avatar" src={user.avatar} />
          ) : (
            <IconProfile />
          )}
        </Button>
      </Link>
      <Popup
        className="navbar__popup"
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <CreatePost onCancel={() => setVisible(false)} />
      </Popup>
    </nav>
  );
};
