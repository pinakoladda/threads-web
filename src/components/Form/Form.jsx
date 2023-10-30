import cn from "classnames";

import "./index.css";

export const Form = (props) => {
  return <form {...props} className={cn("form", props.className)} />;
};
