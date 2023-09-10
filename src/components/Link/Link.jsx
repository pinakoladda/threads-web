import "./index.css";

export const Link = (props) => {
  return <a {...props} className={`link ${props.className}`} />;
};
