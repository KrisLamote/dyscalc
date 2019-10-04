import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';

const Board = ({ targets }) => {
    return (
        <div id="board">
            <Row targets={targets} />
            <Row targets={targets} />
            <Row targets={targets} />
            <Row targets={targets} />
        </div>
    );
};

Board.propTypes = {
    targets: PropTypes.array.isRequired
};

export default Board;
