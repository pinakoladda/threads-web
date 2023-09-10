import "./index.css";

export const Form = (props) => {
  return <form {...props} className={`form ${props.className}`} />;
};
