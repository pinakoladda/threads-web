import "./index.css";
export const Button = (props) => {
  return (
    <button type="button" {...props} className={`button ${props.className}`} />
  );
};
