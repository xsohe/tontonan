export default function InputLabel({
    value,
    className = "",
    children,
    ...props
}) {
    return (
        <label {...props} className={`text-base block mb-2 ` + className}>
            {value ? value : children}
        </label>
    );
    // return (
    //     <label {...props} className={`block font-medium text-sm text-gray-700 ` + className}>
    //         {value ? value : children}
    //     </label>
    // );
}
