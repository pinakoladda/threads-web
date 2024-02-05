import { request } from "../../api";
import { useAuth } from "../../hooks/useAuth/useAuth";
import { Button } from "../Button";
import { IconProfile } from "../Icons/IconProfile";
import { Navbar } from "../Navbar/Navbar";
import { PostsList } from "../PostsList";
import { useState, useEffect } from "react";
import "./index.css";

export const UserProfile = ({ user }) => {
  const { user: currentUser } = useAuth();
  const [posts, setPosts] = useState([]);

  const isCurrentUser = user?._id === currentUser?._id;

  const getPosts = (userId) => {
    if (!userId) return;

    request.get(`/posts/user/${userId}`).then((res) => {
      setPosts(res.data);
    });
  };

  useEffect(() => {
    getPosts(user?._id);
  }, [user]);

  return (
    <>
      <Navbar />
      <div className="profile">
        <div className="profile__info">
          <div className="profile__info_container">
            <h2 className="profile__user-name">{user?.name}</h2>
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

          <Button className="profile__edit-button">
            {isCurrentUser ? "Edit Profile" : "Subscribe"}
          </Button>
        </div>
      </div>
      <PostsList posts={posts} getPosts={() => getPosts(user?._id)} />
    </>
  );
};
