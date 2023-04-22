import { FiArchive, FiClock, FiInbox, FiGrid } from 'react-icons/fi';

export const NAV_LINKS = [
  // {
  //   type: 'common',
  //   label: 'Inbox',
  //   icon: FiArchive,
  //   path: '/app/inbox',
  //   count: 1,
  // },

  {
    type: 'today',
    label: 'Today',
    icon: FiClock,
    path: '/app/today',
  },

  {
    type: 'upcoming',
    label: 'Upcoming',
    icon: FiInbox,
    path: '/app/upcoming',
  },
  {
    type: 'labels',
    label: 'Labels',
    icon: FiGrid,
    path: '/app/labels',
  },
];
