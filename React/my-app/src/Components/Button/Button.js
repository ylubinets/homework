import React from "react";
import PropTypes from "prop-types";
import style from "./Button.module.scss";

const Button = (props) => {
  const { text, backgroundColor, onClick } = props;
  return (
    <div>
      <button
        className={`${style.btn}`}
        onClick={onClick}
        style={{ backgroundColor: backgroundColor }}
      >
        {text}
      </button>
    </div>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;