const PlusIcon = ({ size = 24, color = "currentColor", className = "" }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`lucide lucide-plus ${className}`}
      >
        <path d="M5 12h14" />
        <path d="M12 5v14" />
      </svg>
    );
  };
  
  export default PlusIcon;
  