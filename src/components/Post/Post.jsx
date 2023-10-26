import { IconHeartOutline } from "../Icons/IconHeartOutline";
import { IconMore } from "../Icons/IconMore";
import { Button } from "../Button";
import { Popup } from "../Popup";
import { useState } from "react";
import "./index.css";
import { request } from "../../api";

export const Post = ({ text, userName, login, id, onDelete }) => {
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
    onDelete();
  };
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__avatar"></div>
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
      <Button className="post__like-button">
        <IconHeartOutline />
      </Button>
      <Popup visible={visible} onClose={() => setVisible(false)}>
        <div className="post__popup-continer">
          <Button className="post__popup-button post__popup-edit-button">
            Edit
          </Button>
          <Button
            className="post__popup-button post__popup-delete-button"
            onClick={deletePost}
          >
            Delete
          </Button>
        </div>
      </Popup>
    </div>
  );
};
