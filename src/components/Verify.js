import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Verify = ({ showErrors, toggle }) => {
    const label = showErrors ? "HIDE" : "SHOW";
    const classes = classNames("btn btn-sm btn-outline-primary", {
        selected: showErrors
    });

    return (
        <div className="row justify-content-md-center no-gutters">
            <div id="verify" className="col-md-auto">
                <button onClick={toggle} className={classes}>{`${label} ERRORS`}</button>
            </div>
        </div>
    );
};

Verify.defaultPropTypes = {
    showErrors: false
};

Verify.propTypes = {
    toggle: PropTypes.func,
    showErrors: PropTypes.bool
};

export default Verify;
