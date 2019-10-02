import * as React from 'react';
import Row from '../Row';

const Board = () => {

  const rows = ['','','',''];

  return (
    <div id="board" className="col-8">
      {
        rows.map((item, idx) => {
          return <Row key={idx} />
        })
      }
    </div>
  );
};

export default Board;
