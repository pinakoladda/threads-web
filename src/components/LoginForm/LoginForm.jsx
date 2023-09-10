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
        <p className="form__name">Sign in to the account</p>
        <input
          className="form__input"
          type="text"
          name="login"
          placeholder="Login"
        />
        <input
          className="form__input"
          type="password"
          name="password"
          placeholder="Password"
        />
        <button className="button form__button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};
