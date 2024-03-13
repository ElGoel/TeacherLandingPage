import iconSchools from '@/assets/img/hero/iconSchools.png';
import iconWorld from '@/assets/img/hero/iconWorld.png';
import iconUsers from '@/assets/img/hero/iconUsers.png';

export default {
  data() {
    return {
      stats: [
        {
          name: 'Countries',
          icon: iconWorld,
          amount: 7,
          count: 0,
          color: '#9DA7F9',
          class: '-1'
        },
        {
          name: 'Users',
          icon: iconUsers,
          amount: 16,
          count: 0,
          color: '#FF9332',
          class: '-2'
        },
        {
          name: 'Schools',
          icon: iconSchools,
          amount: 3,
          count: 0,
          color: '#3CCCA6',
          class: '-3'
        }
      ]
    };
  }
};
