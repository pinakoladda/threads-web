import "./index.css";
import { request } from "../../api";

export const LoginForm = () => {
  const onSubmit = (event) => {
    event.preventDefault();
    const login = event.target.login.value;
    const password = event.target.password.value;
    console.log(login, password);

    request.post("/signin", { login, password }).then((res) => {
      localStorage.setItem("token", res.data.token);
      window.location.href = "/";
    });
  };
  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <div className="form__header-container">
          <p className="form__name">Sign in</p>
          <p className="form__header-text">
            First time here?
            <a className="form__link" href="/signup" title="Sign up">
              Sign up
            </a>
          </p>
        </div>
        <div className="form__container">
          <label htmlFor="login" className="form__label">
            Login:
          </label>
          <input
            id="login"
            className="form__input"
            type="text"
            name="login"
            placeholder="Login"
          />
        </div>
        <div className="form__container">
          <label htmlFor="password" className="form__label">
            Password:
          </label>
          <input
            id="password"
            className="form__input"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <button className="button form__button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};
