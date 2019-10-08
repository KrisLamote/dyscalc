import React from "react";
import PropTypes from "prop-types";
import Row from "./Row";

const Board = ({ current, showErrors, targets }) => {
    return (
        <div id="board">
            <Row current={current} showErrors={showErrors} targets={targets} />
            <Row current={current} showErrors={showErrors} targets={targets} />
            <Row current={current} showErrors={showErrors} targets={targets} />
            <Row current={current} showErrors={showErrors} targets={targets} />
        </div>
    );
};

Board.defaultPropTypes = {
    showErrors: false
};

Board.propTypes = {
    current: PropTypes.object,
    showErrors: PropTypes.bool,
    targets: PropTypes.array.isRequired
};

export default Board;
