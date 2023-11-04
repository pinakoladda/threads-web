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
            {user?.avatar ? (
              <img className="profile__avatar" src={user?.avatar} />
            ) : (
              <IconProfile className="profile__avatar" />
            )}
            <div className="container">
              <h2 className="profile__user-name">Buddy</h2>
              <h3 className="profile__user-login">@{user?.login}</h3>
            </div>
            <Button className="profile__edit-button">Edit Profile</Button>
          </div>
          <p className="profile__user-description">About me...</p>
        </div>
      </div>
    </>
  );
};
