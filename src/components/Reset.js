import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

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
    }, [disabled]);

    return (
        <div className="row justify-content-md-center no-gutters">
            <div id="reset" className="col-md-auto">
                <button onClick={handleClick} className="btn btn-sm btn-outline-primary" disabled={disabled}>
                    RESET
                </button>
            </div>
        </div>
    );
};

Reset.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default Reset;
