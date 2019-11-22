import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { FormattedMessage } from "react-intl";
import messages from "../translations/defaults";

const Verify = ({ showErrors, toggle }) => {
    const classes = classNames("btn btn-sm btn-outline-primary", {
        selected: showErrors,
    });

    return (
        <button id="verify" className={classes} onClick={toggle} type="button">
            <FormattedMessage {...messages.verify[showErrors ? "on" : "off"]} />
        </button>
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
