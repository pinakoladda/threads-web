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

import "./index.css";

export const Navbar = () => {
  const { user } = useAuth();
  const [visible, setVisible] = useState();
  console.log(user);
  return (
    <nav className="navbar">
      <Button className="navbar__home-button">
        <IconHome />
      </Button>
      <Button className="navbar__search-button">
        <IconSearch />
      </Button>
      <Button className="navbar__add-button" onClick={() => setVisible(true)}>
        <IconAdd />
      </Button>
      <Button className="navbar__favorite-button">
        <IconFavorite />
      </Button>
      <Button className="navbar__profile-button">
        {user?.avatar ? (
          <img className="navbar__avatar" src={user.avatar} />
        ) : (
          <IconProfile />
        )}
      </Button>
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
