import HongjiesPage from './PersonalPage/HongjiesPage';

import HongjiesProfileImage from './../../../assets/About/HongjiesPage/hongjie_profile.jpg';

const MembersData = [
  {
    id: 'Hongjie1',
    name: 'Hongjie',
    imageSource: HongjiesProfileImage,
    route: '/about/hongjie',
    pageComponent: <HongjiesPage />,
  },
  { id: 'Joe2', name: 'Joe2', imageUrl: '', route: '/about/joe2' },
  { id: 'Joe3', name: 'Joe3', imageUrl: '', route: '/about/joe3' },
  { id: 'Joe4', name: 'Joe4', imageUrl: '', route: '/about/joe4' },
  { id: 'Joe5', name: 'Joe5', imageUrl: '', route: '/about/joe5' },
  { id: 'Joe6', name: 'Joe6', imageUrl: '', route: '/about/joe6' },
];

export default MembersData;
