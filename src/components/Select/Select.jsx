import "./index.css";

export const Select = (props) => {
  return <select {...props} className={`select ${props.className}`} />;
};
