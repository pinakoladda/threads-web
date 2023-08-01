import { IconHeartOutline } from "../Icons/IconHeartOutline";
import { IconMore } from "../Icons/IconMore";
import { Button } from "../Button";
import "./index.css";

export const Post = ({ text, userName, login }) => {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__avatar"></div>
        <div className="post__info">
          <div className="post__user-name">{userName}</div>
          <div className="post__login">{login}</div>
        </div>
        <div className="post__date">11 oct</div>
        <Button className="post__more-button">
          <IconMore />
        </Button>
      </div>
      <p className="post__text">{text}</p>
      <Button className="post__like-button">
        <IconHeartOutline />
      </Button>
    </div>
  );
};
