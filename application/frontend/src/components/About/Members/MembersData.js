import KunchengsPage from './PersonalPage/KunchengsPage';
import HongjiesPage from './PersonalPage/HongjiesPage';
import TamirsPage from './PersonalPage/TamirsPage';

import KunchengProfilePicture from './../../../assets/About/KunchengsPage/KunchengsImage.jpg';
import HongjiesProfileImage from './../../../assets/About/HongjiesPage/hongjie_profile.jpg';
import TamirsProfileImage from './../../../assets/About/TamirsPage/TamirsImage.JPG';

const MembersData = [
  {
    id: 'Hongjie1',
    name: 'Hongjie',
    imageSource: HongjiesProfileImage,
    route: '/about/hongjie',
    pageComponent: <HongjiesPage />,
  },
  {
    id: 'Tamir1',
    name: 'Tamir',
    imageSource: TamirsProfileImage,
    route: '/about/tamir',
    pageComponent: <TamirsPage />,
  },
  {
    id: 'Kuncheng4',
    name: 'Kuncheng',
    imageSource: KunchengProfilePicture,
    route: '/about/kuncheng',
    pageComponent: <KunchengsPage />,
  },

  { id: 'Joe3', name: 'Joe3', imageUrl: '', route: '/about/joe3' },
  { id: 'Joe5', name: 'Joe5', imageUrl: '', route: '/about/joe5' },
  { id: 'Joe6', name: 'Joe6', imageUrl: '', route: '/about/joe6' },
];

export default MembersData;
