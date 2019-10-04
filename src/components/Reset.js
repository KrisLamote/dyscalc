import React from 'react';
import PropTypes from "prop-types";

const Reset = ({ onClick }) => (
    <div className="row">
        <div className="offset-8 col-4">
            <div className="row justify-content-md-center no-gutters">
                <div id="reset" className="col-md-auto">
                    <button onClick={onClick} className="btn btn-sm btn-outline-primary">
                        RESET
                    </button>
                </div>
            </div>
        </div>
    </div>
);

React.propTypes = {
  targets: PropTypes.func.isRequired
};


export default Reset;
