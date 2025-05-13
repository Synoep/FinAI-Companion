import React from 'react';
import { CircleDollarSign } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <CircleDollarSign className="h-8 w-8 text-secondary-500" />
      <div className="ml-2">
        <h1 className="text-xl font-bold text-white">FinAI</h1>
        <p className="text-xs text-primary-200">Companion</p>
      </div>
    </div>
  );
};

export default Logo;