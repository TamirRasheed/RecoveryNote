import KunchengsPage from './PersonalPage/KunchengsPage';

import profilePicture from './../../../assets/About/KunchengsPage/KunchengsImage.jpg';



const MembersData = [
    { id: 'Joe1', name: 'Joe1', imageUrl: '', route: '/about/joe1' },
    { id: 'Joe2', name: 'Joe2', imageUrl: '', route: '/about/joe2' },
    { id: 'Joe3', name: 'Joe3', imageUrl: '', route: '/about/joe3' },


    { id: 'Kuncheng4',
          name: 'Kuncheng',
          imageSource: profilePicture,
          route: '/about/kuncheng',
          pageComponent: <KunchengsPage />,
    },

    { id: 'Joe5', name: 'Joe5', imageUrl: '', route: '/about/joe5' },
    { id: 'Joe6', name: 'Joe6', imageUrl: '', route: '/about/joe6' },
];

export default MembersData;
