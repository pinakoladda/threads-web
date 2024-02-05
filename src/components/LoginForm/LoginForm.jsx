import "./index.css";
import { Input } from "../Input";
import { Button } from "../Button";
import { request } from "../../api";
import { Form } from "../Form";
import { Link } from "../Link";

export const LoginForm = () => {
  const onSubmit = (event) => {
    event.preventDefault();
    const login = event.target.login.value;
    const password = event.target.password.value;

    request.post("/signin", { login, password }).then((res) => {
      localStorage.setItem("token", res.data.token);
      window.location.href = "/";
    });
  };
  return (
    <div className="login-form">
      <Form onSubmit={onSubmit}>
        <div className="login-form__header-container">
          <p className="login-form__name">Sign in</p>
          <p className="login-form__header-text">
            First time here?
            <Link className="login-form__link" to="/signup" title="Sign up">
              Sign up
            </Link>
          </p>
        </div>
        <div className="login-form__container">
          <label htmlFor="login" className="login-form__label">
            Login:
          </label>
          <Input
            id="login"
            className="login-form__input"
            type="text"
            name="login"
            placeholder="Login"
          />
        </div>
        <div className="login-form__container">
          <label htmlFor="password" className="login-form__label">
            Password:
          </label>
          <Input
            id="password"
            className="login-form__input"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <Button className="button login-form__button" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};
