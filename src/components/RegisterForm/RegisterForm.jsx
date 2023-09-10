import { request } from "../../api";

export const RegisterForm = () => {
  const onSubmit = (event) => {
    event.preventDefault();
    const login = event.target.login.value;
    const password = event.target.password.value;
    const email = event.target.gender.value;
    const name = event.target.name.value;
    const surname = event.target.surname.value;
    const birthDate = event.target.birthDate.value;
    const gender = event.target.gender.value;
    console.log(login, password);

    request
      .post("/signup", {
        login,
        password,
        email,
        name,
        surname,
        birthDate,
        gender,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        window.location.href = "/";
      });
  };
  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <p className="form__name">Sign Up</p>
        <input name="name" placeholder="name" required />
        <input name="surname" placeholder="surname" />
        <input name="birthDate" placeholder="date of birth" />
        <input name="gender" placeholder="gender" />
        <input name="email" placeholder="email" required />
        <input name="login" placeholder="login" required />
        <input name="password" placeholder="password" required />
        <button type="submit">ok</button>
      </form>
    </div>
  );
};
