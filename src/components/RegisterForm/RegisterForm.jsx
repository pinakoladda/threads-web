import { request } from "../../api";
import { Form } from "../Form";
import { Button } from "../Button";
import { Input } from "../Input";
import { Link } from "../Link";
import "./index.css";
import { Select } from "../Select";

export const RegisterForm = () => {
  const onSubmit = (event) => {
    event.preventDefault();
    const login = event.target.login.value;
    const password = event.target.password.value;
    const email = event.target.email.value;
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
    <div className="form__container">
      <Form className="register-form" onSubmit={onSubmit}>
        <div className="register-form__header-container">
          <p className="register-form__name">Sign Up</p>
          <p className="register-form__header-text">
            Already have an accont?
            <Link className="register-form__link" href="/signin">
              Sign in
            </Link>
          </p>
        </div>
        <div className="register-form__container">
          <label className="register-form__label">Name:</label>
          <Input name="name" placeholder="name" type="text" required />
        </div>
        <div className="register-form__container">
          <label className="register-form__label">Surame:</label>
          <Input name="surname" placeholder="surname" type="text" />
        </div>
        <div className="register-form__container">
          <label className="register-form__label">Birth Date:</label>
          <Input name="birthDate" placeholder="date of birth" type="date" />
        </div>
        <div className="register-form__container">
          <label className="register-form__label">Gender:</label>
          <Select name="gender">
            <option>---</option>
            <option>female</option>
            <option>male</option>
            <option>non binary</option>
            <option>dog</option>
            <option>cat</option>
            <option>else</option>
          </Select>
        </div>
        <div className="register-form__container">
          <label className="register-form__label">Email:</label>
          <Input name="email" placeholder="email" type="email" required />
        </div>
        <div className="register-form__container">
          <label className="register-form__label">Login:</label>
          <Input name="login" placeholder="login" type="text" required />
        </div>
        <div className="register-form__container">
          <label className="register-form__label">Password:</label>{" "}
          <Input
            name="password"
            placeholder="password"
            type="password"
            required
          />
        </div>
        <div className="register-form__button-container">
          <Button
            className="register-form__button register-form__button_cancel"
            type="reset"
          >
            Cancel
          </Button>
          <Button
            className="register-form__button register-form__button_done"
            type="submit"
          >
            Done
          </Button>
        </div>
      </Form>
    </div>
  );
};
