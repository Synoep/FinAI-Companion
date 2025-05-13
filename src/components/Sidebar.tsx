import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  HomeIcon, 
  Users, 
  BookOpen, 
  MessageSquare, 
  Target, 
  BarChart3, 
  Settings,
  HelpCircle,
  Zap
} from 'lucide-react';
import Logo from './Logo';

const Sidebar: React.FC = () => {
  return (
    <div className="bg-primary-600 text-white w-64 flex flex-col h-full">
      <div className="px-4 py-6">
        <Logo />
      </div>
      <nav className="mt-8 flex-1 px-2">
        <div className="space-y-1">
          <NavItem to="/" icon={<HomeIcon size={20} />} label="Dashboard" />
          <NavItem to="/sales-coach" icon={<Zap size={20} />} label="AI Sales Coach" />
          <NavItem to="/leads" icon={<Target size={20} />} label="Smart Leads" />
          <NavItem to="/clients" icon={<Users size={20} />} label="Client Engagement" />
          <NavItem to="/learning" icon={<BookOpen size={20} />} label="Learning Path" />
        </div>
        <div className="mt-8">
          <h3 className="px-3 text-xs font-semibold text-primary-200 uppercase tracking-wider">
            Insights
          </h3>
          <div className="mt-2 space-y-1">
            <NavItem to="/performance" icon={<BarChart3 size={20} />} label="Performance" />
            <NavItem to="/messages" icon={<MessageSquare size={20} />} label="Messages" />
          </div>
        </div>
      </nav>
      <div className="p-4 border-t border-primary-700">
        <div className="space-y-1">
          <NavItem to="/settings" icon={<Settings size={20} />} label="Settings" />
          <NavItem to="/help" icon={<HelpCircle size={20} />} label="Help Center" />
        </div>
      </div>
    </div>
  );
};

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
        isActive
          ? 'bg-primary-700 text-white'
          : 'text-primary-100 hover:bg-primary-700 hover:text-white'
      }`
    }
  >
    <span className="mr-3">{icon}</span>
    {label}
  </NavLink>
);

export default Sidebar;