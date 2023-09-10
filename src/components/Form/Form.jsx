import "./index.css";

export const Form = (props) => {
  return (
    <div className="form__container">
      <form {...props} className={`form ${props.className}`} />
    </div>
  );
};
