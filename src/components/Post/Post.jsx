import { IconHeartOutline } from "../Icons/IconHeartOutline";
import { IconMore } from "../Icons/IconMore";
import { IconClose } from "../Icons/IconClose";
import { Button } from "../Button";
import { Popup } from "../Popup";
import { useState } from "react";
import { request } from "../../api";
import { IconProfile } from "../Icons/IconProfile";
import { IconHeartFilled } from "../Icons/IconHeartFilled";
import "./index.css";

export const Post = ({
  text,
  userName,
  login,
  id,
  onUpdate,
  avatar,
  isLiked,
  likes,
}) => {
  const [visible, setVisible] = useState();
  const deletePost = async () => {
    const result = confirm("are you sure?");
    if (!result) {
      return;
    }
    await request(`/posts/${id}`, {
      method: "delete",
    });
    setVisible(false);
    onUpdate();
  };

  const LikePost = async () => {
    await request(`/posts/${id}/like`, {
      method: isLiked ? "delete" : "put",
    });
    onUpdate();
  };

  return (
    <div className="post">
      <div className="post__header">
        {avatar ? (
          <img className="post__avatar" src={avatar} />
        ) : (
          <IconProfile className="post__avatar" />
        )}
        <div className="post__info">
          <div className="post__user-name">{userName}</div>
          <div className="post__login">{login}</div>
        </div>
        <div className="post__date">11 oct</div>
        <Button className="post__more-button" onClick={() => setVisible(true)}>
          <IconMore />
        </Button>
      </div>
      <p className="post__text">{text}</p>
      {/* <div className="post__like-container"> */}
      <Button className="post__like-button" onClick={LikePost}>
        {isLiked ? (
          <IconHeartFilled className="post__like post__like-filled" />
        ) : (
          <IconHeartOutline className="post__like post__like-outline" />
        )}
      </Button>
      {likes > 0 && <p className="post__likes-count">{likes}</p>}
      {/* </div> */}
      <Popup
        className="post__popup-continer"
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <Button
          className="post__popup-close-button"
          onClick={() => setVisible(false)}
        >
          <IconClose />
        </Button>
        <Button className="post__popup-button post__popup-edit-button">
          Edit
        </Button>
        <Button
          className="post__popup-button post__popup-delete-button"
          onClick={deletePost}
        >
          Delete
        </Button>
      </Popup>
    </div>
  );
};
