import React from 'react';
import { Menu, Bell, Search, MessageCircle } from 'lucide-react';
import UserAvatar from './UserAvatar';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="bg-white shadow-sm z-10">
      <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-neutral-600 focus:outline-none"
            onClick={onMenuClick}
          >
            <Menu size={24} />
          </button>
          <div className="ml-4 md:ml-0 relative flex-1 flex items-center">
            <div className="max-w-lg w-full lg:max-w-xs">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative text-neutral-400 focus-within:text-neutral-600">
                <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Search size={18} />
                </div>
                <input
                  id="search"
                  className="block w-full bg-white py-2 pl-10 pr-3 border border-neutral-200 rounded-md leading-5 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  placeholder="Search leads, clients, or products..."
                  type="search"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <button className="p-1 rounded-full text-neutral-600 hover:text-neutral-900 focus:outline-none">
            <MessageCircle size={20} />
          </button>
          <button className="p-1 rounded-full text-neutral-600 hover:text-neutral-900 focus:outline-none relative">
            <Bell size={20} />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-error-500 ring-2 ring-white"></span>
          </button>
          <UserAvatar name="Shivam Tiwari" />
        </div>
      </div>
    </header>
  );
};

export default Header;