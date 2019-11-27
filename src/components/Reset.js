import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import messages from "../translations/defaults";

const Reset = ({ onClick }) => {
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDisabled(false);
        }, 1000);
        return () => clearTimeout(timeout);
    }, [disabled]);

    const handleClick = useCallback(() => {
        if (disabled) return;
        onClick();
        setDisabled(true);
    }, [disabled, onClick]);

    return (
        <button
            id="reset"
            className="btn btn-sm btn-outline-primary"
            disabled={disabled}
            onClick={handleClick}
            type="button"
        >
            <FormattedMessage {...messages.reset} />
        </button>
    );
};

Reset.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default Reset;
