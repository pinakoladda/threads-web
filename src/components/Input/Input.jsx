import "./index.css";
export const Input = (props) => {
  return <input {...props} className={`input ${props.className}`} />;
};
