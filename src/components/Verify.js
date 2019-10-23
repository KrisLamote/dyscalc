import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { FormattedMessage } from "react-intl";
import messages from "../translations/defaults";

const Verify = ({ showErrors, toggle }) => {
    const label = showErrors ? "ON" : "OFF";
    const classes = classNames("btn btn-sm btn-outline-primary", {
        selected: showErrors,
    });

    return (
        <div className="row justify-content-md-center no-gutters">
            <div id="verify" className="col-md-auto">
                <button className={classes} onClick={toggle} type="button">
                    <FormattedMessage {...messages.verify} values={{ label }} />
                </button>
            </div>
        </div>
    );
};

Verify.defaultProps = {
    showErrors: false,
};

Verify.propTypes = {
    toggle: PropTypes.func.isRequired,
    showErrors: PropTypes.bool,
};

export default Verify;
