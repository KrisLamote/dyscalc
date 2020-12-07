import React from "react";
import PropTypes from "prop-types";
import Row from "./Row";
import { range } from "../helpers";

const Board = ({ current, showErrors, targets, onCorrect, onIncorrect }) => {
    return (
        <div className="board">
            {range(1, 4).map((key) => (
                <Row
                    key={key.toString()}
                    current={current}
                    showErrors={showErrors}
                    targets={targets}
                    onCorrect={onCorrect}
                    onIncorrect={onIncorrect}
                />
            ))}
        </div>
    );
};

Board.defaultProps = {
    current: null,
    showErrors: false,
};

Board.propTypes = {
    current: PropTypes.object,
    showErrors: PropTypes.bool,
    targets: PropTypes.array.isRequired,
    onCorrect: PropTypes.func.isRequired,
    onIncorrect: PropTypes.func.isRequired,
};

export default Board;
