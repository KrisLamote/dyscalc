import React from "react";
import PropTypes from "prop-types";
import Row from "./Row";

const Board = ({ current, targets }) => {
    return (
        <div id="board">
            <Row current={current} targets={targets} />
            <Row current={current} targets={targets} />
            <Row current={current} targets={targets} />
            <Row current={current} targets={targets} />
        </div>
    );
};

Board.propTypes = {
    current: PropTypes.number,
    targets: PropTypes.array.isRequired
};

export default Board;
