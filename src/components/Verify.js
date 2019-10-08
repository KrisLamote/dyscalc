import React from "react";
import PropTypes from "prop-types";

const Verify = () => (
    <div className="row justify-content-md-center no-gutters">
        <div id="verify" className="col-md-auto">
            <button className="btn btn-sm btn-outline-primary">VERIFY</button>
        </div>
    </div>
);

Verify.propTypes = {
    onClick: PropTypes.func
};

export default Verify;
