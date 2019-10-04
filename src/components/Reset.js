import React from "react";
import PropTypes from "prop-types";

const Reset = ({ onClick }) => (
    <div className="row justify-content-md-center no-gutters">
        <div id="reset" className="col-md-auto">
            <button onClick={onClick} className="btn btn-sm btn-outline-primary">
                RESET
            </button>
        </div>
    </div>
);

Reset.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default Reset;
