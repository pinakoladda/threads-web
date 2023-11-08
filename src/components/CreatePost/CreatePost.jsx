import { Form } from "../Form";
import { Button } from "../Button";
import { IconAttach } from "../Icons/IconAttach";
import { request } from "../../api";
import { useAuth } from "../../hooks/useAuth/useAuth";
import { IconProfile } from "../Icons/IconProfile";
import "./index.css";

export const CreatePost = ({ onCancel }) => {
  const { user } = useAuth();
  const onSubmit = (event) => {
    event.preventDefault();
    const text = event.target.text.value;
    request.post("/posts", { text }).then((res) => {
      window.location.href = "/";
    });
  };
  return (
    <Form className="create-post__form" onSubmit={onSubmit}>
      <div className="create-post__container">
        <Button className="create-post__close-button" onClick={onCancel}>
          Cancel
        </Button>
        <p className="create-post__header">New post</p>
      </div>
      <div className="create-post__content-container">
        {user?.avatar ? (
          <img className="create-post__avatar" src={user?.avatar} />
        ) : (
          <IconProfile className="create-post__avatar" />
        )}
        <div className="container">
          <p className="create-post__user-name">{user?.login}</p>
          <textarea
            name="text"
            role="textbox"
            className="create-post__input"
            placeholder="new thread here..."
            rows={4}
            required
          />
          <Button className="button create-post__attach-button">
            <IconAttach className="attach-button__icon" />
          </Button>
        </div>
      </div>
      <div className="button__container">
        <p className="create-post__text">Everyone can reply</p>
        <Button className="button create-post__done-button" type="submit">
          Post
        </Button>
      </div>
    </Form>
  );
};
