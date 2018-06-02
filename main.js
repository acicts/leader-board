new Vue({
  el: '#demo',

  data: {
    sortKey: 'total',

    reverse: true,

    search: '',

    columns: ['name', 'grade', 'total', 'points', 'tasks', 'favourite', 'rank', 'awards'],

    users: [{
        name: 'H. Jayasahan Hansana',
        total: 104,
        points: "104+0+0",
        grade: 10,
        userId: '100135885',
        tasks: '7',
        favourite: 'Design',
        rank: '13'
      },
      {
        name: 'Janidu Arinda Fernando',
        total: 159,
        points: "159+0+0",
        grade: 9,
        userId: '090741612',
        tasks: '11',
        favourite: 'Explore',
        rank: '7'
      },
      {
        name: 'Heliya Nithira Suriya Bandara',
        total: 237,
        points: "92+120+25",
        grade: 11,
        userId: '111101615',
        tasks: '6',
        favourite: 'Design',
        rank: '4',
        awards: 'Still-Graphics-3D|10-11 Test4|9-11'
      },
      {
        name: 'W.M. Janiru Damsath Bandara',
        total: 98,
        points: "48+0+50",
        grade: 7,
        userId: '070839299',
        tasks: '3',
        favourite: 'Code',
        rank: '15',
        awards: 'Test4|6-8 Test5|6-8'
      },
      {
        name: 'T. Nethula Roshane Peiris',
        total: 138,
        points: "88+0+50",
        grade: 7,
        userId: '070838256',
        tasks: '6',
        favourite: 'Code',
        rank: '9',
        awards: 'Test4|6-8 Test5|6-8'
      },
      {
        name: 'Thulina Dinsara Perera',
        total: 77,
        points: "77+0+0",
        grade: 9,
        userId: '091030109',
        tasks: '6',
        favourite: 'All Rounder',
        rank: '16'
      },
      {
        name: 'H. Sithira Ransara Seneviratne',
        total: 12,
        points: "12+0+0",
        grade: 8,
        userId: '080223301',
        tasks: '1',
        favourite: 'Design',
        rank: '28'
      },
      {
        name: 'Senel Demintha',
        total: 53,
        points: "28+0+25",
        grade: 11,
        userId: '110214810',
        tasks: '2',
        favourite: 'Design/Explore',
        rank: '18',
        awards: 'Test1'
      },
      {
        name: 'Banuja Nethusara Dehigaspage',
        total: 43,
        points: "18+0+25",
        grade: 8,
        userId: '080830456',
        tasks: '1',
        favourite: 'Design',
        rank: '22',
        awards: 'Test5|6-8'
      },
      {
        name: 'Inuka Sanudaya Batawala',
        total: 326,
        points: "131+120+75",
        grade: 7,
        userId: '070516651',
        tasks: '8',
        favourite: 'Explore',
        rank: '1',
        awards: 'Still-Graphics-3D|6-9 Test2|6-8 Test4|6-8 Test5|6-8'
      },
      {
        name: 'J.B. Bihandu Semal',
        total: 124,
        points: "124+0+0",
        grade: 9,
        userId: '091008008',
        tasks: '8',
        favourite: 'Design',
        rank: '10'
      },
      {
        name: 'J.A. Davindu Reshan',
        total: 141,
        points: "116+0+25",
        grade: 11,
        userId: '111147704',
        tasks: '8',
        favourite: 'Design',
        rank: '8',
        awards: 'Test3|9-11'
      },
      {
        name: 'Chamod Nilushanka Perera',
        total: 321,
        points: "176+120+25",
        grade: 11,
        userId: '111141143',
        tasks: '11',
        favourite: 'All Rounder',
        rank: '2',
        awards: 'Still-Graphics-2D|10-11 Test4|9-11'
      },
      {
        name: 'Nayantha Nethsara Senavithilaka',
        total: 49,
        points: "49+0+0",
        grade: 10,
        userId: '101039302',
        tasks: '3',
        favourite: 'Design',
        rank: '20'
      },
      {
        name: 'E.A. Chamuthu Megha Malhara Edirisooriya',
        total: 200,
        points: "175+0+25",
        grade: 10,
        userId: '100148900',
        tasks: '11',
        favourite: 'Design',
        rank: '6',
        awards: 'Test5|9-11'
      },
      {
        name: 'T. Didula Dinoj Pieris',
        total: 15,
        points: "15+0+0",
        grade: 9,
        userId: '090125136',
        tasks: '1',
        favourite: 'Design',
        rank: '25'
      },
      {
        name: 'R.M. Tenura Geenath',
        total: 15,
        points: "15+0+0",
        grade: 8,
        userId: '080835791',
        tasks: '1',
        favourite: 'Design',
        rank: '25'
      },
      {
        name: 'M.M.A. Pahan Samudika Abhayawardhane',
        total: 215,
        points: "70+120+25",
        grade: 11,
        userId: '110418733',
        tasks: '4',
        favourite: 'Design',
        rank: '5',
        awards: 'Motion-Graphics-2D|10-11 Test3|9-11'
      },
      {
        name: 'K.A. Samiru Thisaraka De Silva',
        total: 102,
        points: "102+0+0",
        grade: 11,
        userId: '110842334',
        tasks: '7',
        favourite: 'Design',
        rank: '14'
      },
      {
        name: 'Benul Chenuka Wijwrathne',
        total: 252,
        points: "82+120+50",
        grade: 11,
        userId: '110427637',
        tasks: '5',
        favourite: 'Code/Design',
        rank: '3',
        awards: 'Motion-Grphics-3D|10-11 Test2|9-11 Test4|9-11'
      },
      {
        name: 'Senura Danitha Ratnayake',
        total: 50,
        points: "0+0+50",
        grade: 6,
        userId: '061142574',
        tasks: '0',
        favourite: '---',
        rank: '19',
        awards: 'Test2|6-8 Test5|6-8'
      },
      {
        name: 'Nithika Senaweera',
        total: 123,
        points: "123+0+0",
        grade: 10,
        userId: '100520368',
        tasks: '8',
        favourite: 'Explore',
        rank: '11'
      },
      {
        name: 'Kavindu Pabasara Panditharatne',
        total: 109,
        points: "109+0+0",
        grade: 10,
        userId: '101043545',
        tasks: '7',
        favourite: 'Design',
        rank: '12'
      },
      {
        name: 'Osanda Samaratunge',
        total: 18,
        points: "18+0+0",
        grade: 11,
        userId: '111134290',
        tasks: '1',
        favourite: 'Design',
        rank: '24'
      },
      {
        name: 'S. Chandupa Yasas Silva',
        total: 49,
        points: "49+0+0",
        grade: 10,
        userId: '100944124',
        tasks: '3',
        favourite: 'Code/Design',
        rank: '20'
      },
      {
        name: 'Dulaj Bandara Weerakoon',
        total: 14,
        points: "14+0+0",
        grade: 11,
        userId: '1104107222',
        tasks: '1',
        favourite: 'Code',
        rank: '27'
      },
      {
        name: 'K.W. Sanithu Hasmal Kudaliyana',
        total: 25,
        points: "0+0+25",
        grade: 8,
        userId: '080119696',
        tasks: '0',
        favourite: '---',
        rank: '23',
        awards: 'Test3|6-8'
      },
      {
        name: 'L. Gothira Sathnindu Mendis',
        total: 73,
        points: "73+0+0",
        grade: 9,
        userId: '090930522',
        tasks: '5',
        favourite: 'Design',
        rank: '17'
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
