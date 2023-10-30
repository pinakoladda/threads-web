import cn from "classnames";

import { createPortal } from "react-dom";
import { useScrollDisable } from "../../hooks/useScrollDisable/useScrollDisable";
import "./index.css";

export const Popup = ({ visible = false, onClose, children, className }) => {
  useScrollDisable(visible);
  return createPortal(
    <div className="popup" data-visible={visible}>
      <div className="popup__overlay" onClick={onClose}></div>
      <div className={cn("popup__container", className)}>{children}</div>
    </div>,
    document.body,
  );
};
