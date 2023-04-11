import { FiArchive, FiClock, FiInbox, FiGrid } from 'react-icons/fi';

export const NAV_LINKS = [
  {
    type: 'common',
    label: 'Inbox',
    icon: FiArchive,
    path: '/',
    count: 1,
  },

  {
    type: 'common',
    label: 'Today',
    icon: FiClock,
    path: '/',
    count: 2,
  },

  {
    type: 'common',
    label: 'Upcoming',
    icon: FiInbox,
    path: '/',
    count: 10,
  },
  {
    type: 'common',
    label: 'Labels',
    icon: FiGrid,
    path: '/',
    // count: 10,
  },
];
