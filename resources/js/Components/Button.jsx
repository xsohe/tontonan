import React from "react";
import PropTypes from "prop-types";

Button.propTypes = {
    type: PropTypes.oneOf(["submit", "button", "reset"]),
    className: PropTypes.string,
    variant: PropTypes.oneOf([
        "primary",
        "warning",
        "danger",
        "light-outline",
        "white-outline",
    ]),
    processing: PropTypes.bool,
    children: PropTypes.node,
};

export default function Button({
    type = "submit",
    variant = "primary",
    processing,
    className = "",
    children,
    ...props
}) {
    return (
        <button
            {...props}
            type={type}
            className={`rounded-2xl py-[13px] text-center w-full btn-${variant} ${
                processing && "opacity-30"
            }`}
            disabled={processing}
        >
            {children}
        </button>
    );
}
