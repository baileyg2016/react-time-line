import React from "react";
import PropTypes from "prop-types";

/**
 * @usage
 * <TimlineItem time={time} text={text} amount={amount} />
 */
function TimlineItem({ text, amount }) {
  return (
    <li>
      <i className="fa" />
      <div className="time-line-item">
        <span className="time">
          <i className="fa" />
          {"$".concat(amount)}
        </span>
        <div className="time-line-header">{text}</div>
      </div>
    </li>
  );
}

TimlineItem.defaultProps = {};

TimlineItem.propTypes = {
  text: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
};

export default TimlineItem;
