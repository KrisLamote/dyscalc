import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import messages from "../translations/defaults";

const Options = ({ onClick }) => {
    return (
        <button
            id="options"
            className="btn btn-sm btn-outline-primary"
            onClick={onClick}
            type="button"
        >
            <FormattedMessage {...messages.options.button} />
        </button>
    );
};

Options.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default Options;
