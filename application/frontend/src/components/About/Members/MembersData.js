import KunchengsPage from './PersonalPage/KunchengsPage';
import HongjiesPage from './PersonalPage/HongjiesPage';
import TamirsPage from './PersonalPage/TamirsPage';
import IvansPage from './PersonalPage/IvansPage';
import JoelsPage from './PersonalPage/JoelsPage';

import KunchengProfilePicture from './../../../assets/About/KunchengsPage/KunchengsImage.jpg';
import HongjiesProfileImage from './../../../assets/About/HongjiesPage/hongjie_profile.jpg';
import TamirsProfileImage from './../../../assets/About/TamirsPage/TamirsImage.JPG';
import JoelsProfileImage from './../../../assets/About/JoelsPage/JoelProfilePic.jpeg';
import DummyProfileImage from './../../../assets/About/dummy-profile-pic.png';

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
    id: 'Kuncheng3',
    name: 'Kuncheng',
    imageSource: KunchengProfilePicture,
    route: '/about/kuncheng',
    pageComponent: <KunchengsPage />,
  },
  {
    id: 'Joel4',
    name: 'Joel',
    imageSource: JoelsProfileImage,
    route: '/about/joel',
    pageComponent: <JoelsPage />,
  },
  {
    id: 'Ivan5',
    name: 'Ivan',
    imageSource: DummyProfileImage,
    route: '/about/ivan',
    pageComponent: <IvansPage />,
  },
];

export default MembersData;
