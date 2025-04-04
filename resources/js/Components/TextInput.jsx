import { forwardRef, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const TextInput = forwardRef(function TextInput(
    {
        type = "text",
        className = "",
        isFocused = false,
        value,
        variant = "primary",
        placeholder,
        isError,
        ...props
    },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                {...props}
                type={type}
                value={value}
                className={`rounded-2xl py-[13px] px-7 w-full input-${variant} ${className} ${
                    isError && "input-error"
                }`}
                placeholder={placeholder}
                ref={input}
            />
        </div>
    );
});

TextInput.propTypes = {
    type: PropTypes.oneOf(["text", "password", "email", "number", "file"]),
    className: PropTypes.string,
    isFocused: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    variant: PropTypes.oneOf(["primary", "error", "primary-outline"]),
    placeholder: PropTypes.string,
    isError: PropTypes.bool,
};

export default TextInput;
