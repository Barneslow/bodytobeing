import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forwardRef } from "react";

import styles from "./IconButton.module.css";

const IconButton = forwardRef((props, ref) => {
  const { className, style, icon, onClick } = props;

  if (className === "custom-prev")
    return (
      <button
        ref={ref}
        style={style}
        className="custom-nav prev"
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
    );
  else
    return (
      <button
        ref={ref}
        style={style}
        className="custom-nav next"
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    );
});

export default IconButton;
