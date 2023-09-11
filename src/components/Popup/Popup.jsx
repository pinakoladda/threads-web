import { createPortal } from "react-dom";
import { useScrollDisable } from "../../hooks/useScrollDisable/useScrollDisable";
import "./index.css";

export const Popup = ({ visible = false, onClose, children }) => {
  useScrollDisable(visible);
  return createPortal(
    <div className="popup" data-visible={visible}>
      <div className="popup__overlay" onClick={onClose}></div>
      <div className="popup__container">{children}</div>
    </div>,
    document.body,
  );
};
