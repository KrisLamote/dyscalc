import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';
const targets = [6, 8, 9];
const Row = ({children}) => (
    <div className="row">
        <Cell targets={targets}/>
        <Cell targets={targets}/>
        <Cell targets={targets}/>
        <Cell targets={targets}/>
    </div>
);
Row.propTypes = {
    children: PropTypes.node
};
export default Row;
