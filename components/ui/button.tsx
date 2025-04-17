export function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl ${className}`}
    >
      {children}
    </button>
  );
}