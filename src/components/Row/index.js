import * as React from 'react';
import Cell from '../Cell';

const Row = () => {

  const cells = ['','','',''];

  return (
    <div className="row">
      {
        cells.map((item, idx) => {
          return <Cell key={idx}/>
        })
      }
    </div>
  );
};

export default Row;
