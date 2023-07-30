import { IconHeartOutline } from "../IconHeartOutline";
import { IconMore } from "../IconMore";
import "./index.css";
export const Post = () => {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__avatar"></div>
        <div className="post__info">
          <div className="post__user-name">Buddy Sobek</div>
          <div className="post__login">@whoisgoodboy</div>
        </div>
        <div className="post__date">11 oct</div>
        <button className="post__more-button">
          <IconMore />
        </button>
      </div>
      <p className="post__text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
        consequuntur deserunt dolorem veniam beatae? Quia at error incidunt!
        Quasi aut animi enim? Ullam error libero modi, nobis iusto maiores
        adipisci.
      </p>
      <button className="post__like-button">
        <IconHeartOutline />
      </button>
    </div>
  );
};
