new Vue({
  el: '#demo',

  data: {
    sortKey: '',

    reverse: false,

    search: '',

    columns: ['name', 'grade', 'rank'],

    users: [{
        name: 'L. Gothira Sathnindu Mendis',
        grade: 9,
        rank: '1'
      },
      {
        name: 'Chamod Nilushanka Perera',
        grade: 11,
        rank: '2'
      },
      {
        name: 'Heliya Nithira Suriya Bandara',
        grade: 11,
        rank: '3'
      },
      {
        name: 'Inuka Sanudaya Batawala',
        grade: 7,
        rank: '4'
      },
      {
        name: 'Benul Chenuka Wijwrathne',
        grade: 11,
        rank: '5'
      },
      {
        name: 'T. Nethula Roshane Peiris',
        grade: 7,
        rank: '6'
      },
      {
        name: 'W.M. Janiru Damsath Bandara',
        grade: 7,
        rank: '8'
      },
      {
        name: 'J.A. Davindu Reshan',
        grade: 11,
        rank: '9'
      },
      {
        name: 'Janidu Arinda Fernando',
        grade: 9,
        rank: '10'
      },
      {
        name: 'M.M.A. Pahan Samudika Abhayawardhane',
        grade: 11,
        rank: '11'
      },
      {
        name: 'J.B. Bihandu Semal',
        grade: 9,
        rank: '12'
      },
      {
        name: 'Nithika Senaweera',
        grade: 10,
        rank: '13'
      },
      {
        name: 'H. Jayasahan Hansana',
        grade: 10,
        rank: '14'
      },
      {
        name: 'E.A. Chamuthu Megha Malhara Edirisooriya',
        grade: 10,
        rank: '15'
      },
      {
        name: 'Thulina Dinsara Perera',
        grade: 9
      },
      {
        name: 'H. Sithira Ransara Seneviratne',
        grade: 8
      },
      {
        name: 'Senel Demintha',
        grade: 11
      },
      {
        name: 'Banuja Nethusara Dehigaspage',
        grade: 8
      },
      {
        name: 'Nayantha Nethsara Senavithilaka',
        grade: 10
      },
      {
        name: 'T. Didula Dinoj Pieris',
        grade: 9
      },
      {
        name: 'R.M. Tenura Geenath',
        grade: 8
      },
      {
        name: 'K.A. Samiru Thisaraka De Silva',
        grade: 11
      },
      {
        name: 'Senura Danitha Ratnayake',
        grade: 6
      },
      {
        name: 'Kavindu Pabasara Panditharatne',
        grade: 10
      },
      {
        name: 'Osanda Samaratunge',
        grade: 11
      },
      {
        name: 'S. Chandupa Yasas Silva',
        grade: 10
      },
      {
        name: 'Dulaj Bandara Weerakoon',
        grade: 11
      },
      {
        name: 'K.W. Sanithu Hasmal Kudaliyana',
        grade: 8
      },
      {
        name: 'J.A. Gamitha Kalsara Jayalath',
        grade: 9
      },
      {
        name: 'W.D. Upek Kasun Akalanka',
        grade: 10
      },
      {
        name: 'Samuditha Garusinha',
        grade: 9
      },
      {
        name: 'M.D. Chamod Madushan Gunathilaka',
        grade: 10
      },
      {
        name: 'Isuka Daniru Buddima Pussewela',
        grade: 11
      },
    ]
  },

  methods: {
    sortBy: function (sortKey) {
      this.reverse = (this.sortKey == sortKey) ? !this.reverse : false;

      this.sortKey = sortKey;
    }
  }
});
