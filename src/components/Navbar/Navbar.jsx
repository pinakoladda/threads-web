import cn from "classnames";

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
        <Button
          className={cn(
            "navbar__button",
            window.location.pathname === "/" ? "navbar__button_active" : "",
          )}
        >
          <IconHome />
        </Button>
      </Link>
      <Link to="/search">
        <Button
          className={cn(
            "navbar__button",
            window.location.pathname === "/search"
              ? "navbar__button_active"
              : "",
          )}
        >
          <IconSearch />
        </Button>
      </Link>
      <Button className="navbar__add-button" onClick={() => setVisible(true)}>
        <IconAdd />
      </Button>
      <Link to="/notifications">
        <Button
          className={cn(
            "navbar__button",
            window.location.pathname === "/notifications"
              ? "navbar__button_active"
              : "",
          )}
        >
          <IconFavorite />
        </Button>
      </Link>
      <Link to={`/user/${user?.login}`}>
        <Button
          className={cn(
            "navbar__button",
            window.location.pathname === `/user/${user?.login}`
              ? "navbar__button_active"
              : "",
          )}
        >
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
