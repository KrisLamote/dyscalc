import React from "react";
import PropTypes from "prop-types";
import Row from "./Row";

const Board = ({ current, showErrors, targets, onCorrect, onIncorrect }) => {
    return (
        <div id="board">
            <Row current={current} showErrors={showErrors} targets={targets} onCorrect={onCorrect} onIncorrect={onIncorrect} />
            <Row current={current} showErrors={showErrors} targets={targets} onCorrect={onCorrect} onIncorrect={onIncorrect} />
            <Row current={current} showErrors={showErrors} targets={targets} onCorrect={onCorrect} onIncorrect={onIncorrect} />
            <Row current={current} showErrors={showErrors} targets={targets} onCorrect={onCorrect} onIncorrect={onIncorrect} />
        </div>
    );
};

Board.defaultPropTypes = {
    showErrors: false
};

Board.propTypes = {
    current: PropTypes.object,
    showErrors: PropTypes.bool,
    targets: PropTypes.array.isRequired,
    onCorrect: PropTypes.func.isRequired, 
    onIncorrect: PropTypes.func.isRequired,
};

export default Board;
