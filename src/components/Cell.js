import React from 'react';
import { pickOne } from '../helpers';

const Cell = props => {
  const target = pickOne(props.targets);
  const sum = `1 + ${target - 1}`;

  return (
    <div className="col-md-3 cell">
      <div className="cell-content">{sum}</div>
    </div>
  );
};

Cell.propTypes = {};

export default Cell;
