import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';
const Row = ({children}) => (
    <div className="row">
        <Cell />
        <Cell />
        <Cell />
        <Cell />
    </div>
);
Row.propTypes = {
    children: PropTypes.node
};
export default Row;
