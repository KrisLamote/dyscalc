import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {injectIntl, FormattedMessage} from 'react-intl';
import {VERIFICATION} from '../translations/constants';

const Verify = ({ showErrors, toggle }) => {
    const label = showErrors ? "ON" : "OFF";
    const classes = classNames("btn btn-sm btn-outline-primary", {
        selected: showErrors
    });

    return (
        <div className="row justify-content-md-center no-gutters">
            <div id="verify" className="col-md-auto">
                <button
                    onClick={toggle}
                    className={classes}
                >
                    <FormattedMessage id={VERIFICATION} values={{label: label}}/>
                </button>
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

export default injectIntl(Verify);
