import Image from "next/image";
import React from "react";

const Avatar = ({ imageUrl, title }) => {
  const getInitials = (name) => {
    const names = name.split(" ");
    return names
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  const renderAvatar = () => {
    if (imageUrl) {
      return (
        <Image
          src={imageUrl}
          alt="Avatar"
          width={300}
          height={300}
          className="w-10 h-10 rounded-full"
        />
      );
    } else {
      const initials = getInitials(title);
      return (
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300">
          <span className="text-sm font-medium text-gray-600">{initials}</span>
        </div>
      );
    }
  };

  return (
    <div className="flex items-center space-x-2">
      {renderAvatar()}
      {/* <span className="text-sm font-medium">{title}</span> */}
    </div>
  );
};

export default Avatar;
