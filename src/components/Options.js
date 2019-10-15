import React from 'react';
import { FormattedMessage } from 'react-intl';

const Options = ({ onClick }) => {
  return (
    <div className='row justify-content-md-center no-gutters'>
      <div id='options' className='col-md-auto'>
        <button
          onClick={onClick}
          className='btn btn-sm btn-outline-primary'
        >
          <FormattedMessage id={'OPTIONS'} />
        </button>
      </div>
    </div>
  );
};

export default Options;
