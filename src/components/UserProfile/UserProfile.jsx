import { useAuth } from "../../hooks/useAuth/useAuth";
import { Button } from "../Button";
import { IconProfile } from "../Icons/IconProfile";
import { Navbar } from "../Navbar/Navbar";
import "./index.css";

export const UserProfile = () => {
  const { user } = useAuth();
  return (
    <>
      <Navbar />
      <div className="profile">
        <div className="profile__info">
          <div className="profile__info_container">
            <h2 className="profile__user-name">Buddy</h2>
            <h3 className="profile__user-login">@{user?.login}</h3>
            <p className="profile__user-followers">2 followers</p>
          </div>
          {user?.avatar ? (
            <img className="profile__avatar" src={user?.avatar} />
          ) : (
            <IconProfile className="profile__avatar" />
          )}
        </div>
        <div className="profile__description">
          <p className="profile__user-description">
            I love my mom and dad, love eating, sleeping and walking outside
            whith my family
          </p>
          <Button className="profile__edit-button">Edit Profile</Button>
        </div>
      </div>
    </>
  );
};
