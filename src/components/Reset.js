import React from "react";
import PropTypes from "prop-types";
import {injectIntl, FormattedMessage} from 'react-intl';
import {RESET} from '../translations/constants';

const Reset = ({ onClick }) => (
    <div className="row justify-content-md-center no-gutters">
        <div id="reset" className="col-md-auto">
            <button onClick={onClick} className="btn btn-sm btn-outline-primary">
                <FormattedMessage id={RESET}/>
            </button>
        </div>
    </div>
);

Reset.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default injectIntl(Reset);
