import { redirect } from "react-router-dom";
import { request } from "../../api";
export const LoginPage = () => {
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
      <form onSubmit={onSubmit}>
        <input type="text" name="login" placeholder="login" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
