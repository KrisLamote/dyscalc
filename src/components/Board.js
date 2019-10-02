import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';

const targets = [6, 8, 9];

const Board = ({ children }) => (
    <div id="board" className="col-8">
        <Row targets={targets} />
        <Row targets={targets} />
        <Row targets={targets} />
        <Row targets={targets} />
    </div>
);

Board.propTypes = {
    children: PropTypes.node
};

export default Board;
