import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import messages from "../translations/defaults";

const Options = ({ onClick }) => {
    return (
        <div className="row justify-content-md-center no-gutters">
            <div id="options" className="col-md-auto">
                <button onClick={onClick} className="btn btn-sm btn-outline-primary">
                    <FormattedMessage {...messages.options.button} />
                </button>
            </div>
        </div>
    );
};

Options.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default Options;
