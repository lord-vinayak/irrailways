import { Users, Upload, ListChecks, LayoutDashboard, Map, Bot } from 'lucide-react';

export const adminNavItems = [
  {
    title: 'User Management',
    href: '/admin/users',
    icon: Users,
  },
  {
    title: 'Cable Plan Upload',
    href: '/admin/upload',
    icon: Upload,
  },
];

export const supervisorNavItems = [
  {
    title: 'Verification Queue',
    href: '/supervisor/queue',
    icon: ListChecks,
  },
];

export const officerNavItems = [
  {
    title: 'Compliance Dashboard',
    href: '/officer/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Cable GIS Map',
    href: '/officer/map',
    icon: Map,
  },
  {
    title: 'AI Assistant',
    href: '/officer/gpt',
    icon: Bot,
  },
];
