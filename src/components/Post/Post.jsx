import { IconHeartOutline } from "../Icons/IconHeartOutline";
import { IconMore } from "../Icons/IconMore";
import "./index.css";

export const Post = ({ text, userName }) => {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__avatar"></div>
        <div className="post__info">
          <div className="post__user-name">{userName}</div>
          <div className="post__login">@whoisgoodboy</div>
        </div>
        <div className="post__date">11 oct</div>
        <button className="post__more-button">
          <IconMore />
        </button>
      </div>
      <p className="post__text">{text}</p>
      <button className="post__like-button">
        <IconHeartOutline />
      </button>
    </div>
  );
};
