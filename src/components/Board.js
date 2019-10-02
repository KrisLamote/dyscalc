import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
const Board = ({children}) => (
    <div id="board" className="col-8">
        <Row />
        <Row />
        <Row />
        <Row />
    </div>
);
Board.propTypes = {
    children: PropTypes.node
};
export default Board;
