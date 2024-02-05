import { Link as RouterLink } from "react-router-dom";

import "./index.css";

export const Link = (props) => {
  return <RouterLink {...props} className={`link ${props.className}`} />;
};
