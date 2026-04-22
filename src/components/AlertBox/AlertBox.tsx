import React from "react";
import type { AlertBoxProps } from "../../types/index";

// AlertBox - Displays alert messages
export const AlertBox: React.FC<AlertBoxProps> = ({
  type,
  message,
  onClose,
  children,
}) => {
  console.log("AlertBox rendered - type:", type);

  // Maps alert types to Tailwind CSS Classes - avoids multiple if/else statements for styling
  const alertStyles = {
    success: "bg-green-100 border-green-500 text-green-700",
    error: "bg-red-100 border-red-500 text-red-700",
    warning: "bg-yellow-100 border-yellow-500 text-yellow-700",
    info: "bg-blue-100 border-blue-500 text-blue-700",
  };

  // Dynamically applies the correct color classes based on type
  return (
    <div className={`p-4 border-l-4 ${alertStyles[type]}`}>
      <div className="flex justify-between items-center">
        <p>{message}</p>
        {/* Only renders the close button if onClose handler was provided */}
        {onClose && (
          <button
            onClick={onClose}
            className="ml-4 text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        )}
      </div>
      {/* Renders any additional content passed between AlertBox tags */}
      {children}
    </div>
  );
};
