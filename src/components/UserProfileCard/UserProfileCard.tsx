import React from "react";
import type { UserProfileCardProps } from "../../types/index";

// UserProfileCard - Displays user profile information with configurable sections
export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  showEmail = true,
  showRole = true,
  onEdit,
  children,
}) => {
  console.log("UserProfileCard rendered - user:", user.name);

  return (
    <div className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
      <div className="flex items-center gap-4 mb-4">
        {/* Renders image if avatarUrl provided, otherwise displays initial-based avatar */}
        {user.avatarUrl ? (
          <img
            src={user.avatarUrl}
            alt={user.name}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
            {user.name.charAt(0).toUpperCase()}
          </div>
        )}
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
          {/* Conditionally renders email and role based props */}
          {showEmail && <p className="text-sm text-gray-500">{user.email}</p>}
          {showRole && (
            <p className="text-sm text-gray-600 font-medium">{user.role}</p>
          )}
        </div>
      </div>
      {/* Renders children with visual separator if provided */}
      {children && (
        <div className="border-t border-gray-100 pt-3">{children}</div>
      )}
      {/* Only renders edit button if onEdit handler was provided */}
      {onEdit && (
        <button
          onClick={() => {
            console.log("Edit clicked - UserId:", user.id);
            onEdit(user.id);
          }}
          className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
        >
          Edit Profile
        </button>
      )}
    </div>
  );
};
