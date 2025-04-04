export default function FlashMessage({ message, className }) {
    return (
        <div
            className={`flex flex-row rounded-lg bg-green-200 px-4 py-3 text-green-700 border border-green-300 ${className}`}
        >
            {message}
        </div>
    );
}
