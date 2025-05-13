import React from 'react';

interface UserAvatarProps {
  name: string;
  imageSrc?: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ name, imageSrc }) => {
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);

  return (
    <div className="flex items-center">
      <div className="relative">
        {imageSrc ? (
          <img
            className="h-8 w-8 rounded-full border-2 border-white"
            src={imageSrc}
            alt={name}
          />
        ) : (
          <div className="h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center text-white text-sm font-medium">
            {initials}
          </div>
        )}
        <span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full bg-success-500 ring-1 ring-white"></span>
      </div>
      <span className="ml-2 text-sm font-medium text-neutral-800 hidden sm:block">
        {name}
      </span>
    </div>
  );
};

export default UserAvatar;