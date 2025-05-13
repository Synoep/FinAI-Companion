import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import Sidebar from './Sidebar';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-neutral-900 bg-opacity-75 transition-opacity"
        onClick={onClose}
      />
      
      {/* Sidebar container */}
      <div className="fixed inset-y-0 left-0 flex z-10 max-w-xs w-full">
        <div className="relative flex-1 flex flex-col bg-primary-600">
          <div className="absolute top-0 right-0 pt-2 pr-2">
            <button
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full text-white focus:outline-none"
              onClick={onClose}
            >
              <X size={24} />
            </button>
          </div>
          
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;