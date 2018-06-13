new Vue({
  el: '#demo',

  data: {
    sortKey: 'total',

    reverse: true,

    search: '',

    columns: ['name', 'grade', 'total', 'points', 'tasks', 'favourite', 'rank', 'awards'],

    users: [{
        name: 'H. Jayasahan Hansana',
        total: 184,
        points: "154+30+0",
        grade: 10,
        userId: '100135885',
        tasks: '10',
        favourite: 'Design',
        rank: '13',
        awards: 'ARDROBERRY-1st'
      },
      {
        name: 'Janidu Arinda Fernando',
        total: 220,
        points: "220+0+0",
        grade: 9,
        userId: '090741612',
        tasks: '15',
        favourite: 'Design/Explore',
        rank: '10'
      },
      {
        name: 'Heliya Nithira Suriya Bandara',
        total: 412,
        points: "267+120+25",
        grade: 11,
        userId: '111101615',
        tasks: '16',
        favourite: 'Design',
        rank: '1',
        awards: 'Still-Graphics-3D|10-11 Test4|9-11'
      },
      {
        name: 'W.M. Janiru Damsath Bandara',
        total: 251,
        points: "201+0+50",
        grade: 7,
        userId: '070839299',
        tasks: '12',
        favourite: 'Design/Explore',
        rank: '8',
        awards: 'Test4|6-8 Test5|6-8'
      },
      {
        name: 'T. Nethula Roshane Peiris',
        total: 202,
        points: "152+0+50",
        grade: 7,
        userId: '070838256',
        tasks: '10',
        favourite: 'Code/Design',
        rank: '11',
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
        rank: '21'
      },
      {
        name: 'H. Sithira Ransara Seneviratne',
        total: 12,
        points: "12+0+0",
        grade: 8,
        userId: '080223301',
        tasks: '1',
        favourite: 'Design',
        rank: '33'
      },
      {
        name: 'Senel Demintha',
        total: 53,
        points: "28+0+25",
        grade: 11,
        userId: '110214810',
        tasks: '2',
        favourite: 'Design/Explore',
        rank: '23',
        awards: 'Test1'
      },
      {
        name: 'Banuja Nethusara Dehigaspage',
        total: 61,
        points: "36+0+25",
        grade: 8,
        userId: '080830456',
        tasks: '2',
        favourite: 'Design/Explore',
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
        favourite: 'All Rounder',
        rank: '4',
        awards: 'Still-Graphics-3D|6-9 Test2|6-8 Test4|6-8 Test5|6-8'
      },
      {
        name: 'J.B. Bihandu Semal',
        total: 124,
        points: "196+0+0",
        grade: 9,
        userId: '091008008',
        tasks: '13',
        favourite: 'Design',
        rank: '12'
      },
      {
        name: 'J.A. Davindu Reshan',
        total: 354,
        points: "329+0+25",
        grade: 11,
        userId: '111147704',
        tasks: '22',
        favourite: 'Design/Explore',
        rank: '3',
        awards: 'Test3|9-11'
      },
      {
        name: 'Chamod Nilushanka Perera',
        total: 358,
        points: "213+120+25",
        grade: 11,
        userId: '111141143',
        tasks: '13',
        favourite: 'All Rounder',
        rank: '2',
        awards: 'Still-Graphics-2D|10-11 Test4|9-11'
      },
      {
        name: 'Nayantha Nethsara Senavithilaka',
        total: 123,
        points: "63+60+0",
        grade: 10,
        userId: '101039302',
        tasks: '4',
        favourite: 'Design Explore',
        rank: '16',
        awards: 'ARDROBERRY-2nd'
      },
      {
        name: 'E.A. Chamuthu Megha Malhara Edirisooriya',
        total: 250,
        points: "225+0+25",
        grade: 10,
        userId: '100148900',
        tasks: '14',
        favourite: 'Design',
        rank: '9',
        awards: 'Test5|9-11'
      },
      {
        name: 'T. Didula Dinoj Pieris',
        total: 42,
        points: "42+0+0",
        grade: 9,
        userId: '090125136',
        tasks: '3',
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
        rank: '31'
      },
      {
        name: 'M.M.A. Pahan Samudika Abhayawardhane',
        total: 252,
        points: "107+120+25",
        grade: 11,
        userId: '110418733',
        tasks: '6',
        favourite: 'Design',
        rank: '7',
        awards: 'Motion-Graphics-2D|10-11 Test3|9-11'
      },
      {
        name: 'K.A. Samiru Thisaraka De Silva',
        total: 140,
        points: "140+0+0",
        grade: 11,
        userId: '110842334',
        tasks: '9',
        favourite: 'Explore/Design',
        rank: '15'
      },
      {
        name: 'Benul Chenuka Wijwrathne',
        total: 287,
        points: "117+120+50",
        grade: 11,
        userId: '110427637',
        tasks: '7',
        favourite: 'Code/Design',
        rank: '6',
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
        rank: '24',
        awards: 'Test2|6-8 Test5|6-8'
      },
      {
        name: 'Nithika Senaweera',
        total: 143,
        points: "143+0+0",
        grade: 10,
        userId: '100520368',
        tasks: '9',
        favourite: 'Explore',
        rank: '14'
      },
      {
        name: 'Kavindu Pabasara Panditharatne',
        total: 109,
        points: "109+0+0",
        grade: 10,
        userId: '101043545',
        tasks: '7',
        favourite: 'All Rounder',
        rank: '20'
      },
      {
        name: 'Osanda Samaratunge',
        total: 18,
        points: "18+0+0",
        grade: 11,
        userId: '111134290',
        tasks: '1',
        favourite: 'Design',
        rank: '29'
      },
      {
        name: 'S. Chandupa Yasas Silva',
        total: 119,
        points: "69+0+50",
        grade: 10,
        userId: '100944124',
        tasks: '4',
        favourite: 'All Rounder',
        rank: '19',
        awards: 'Final-Test|9-11'
      },
      {
        name: 'Dulaj Bandara Weerakoon',
        total: 14,
        points: "14+0+0",
        grade: 11,
        userId: '1104107222',
        tasks: '1',
        favourite: 'Code',
        rank: '32'
      },
      {
        name: 'K.W. Sanithu Hasmal Kudaliyana',
        total: 25,
        points: "45+0+75",
        grade: 8,
        userId: '080119696',
        tasks: '3',
        favourite: 'Design',
        rank: '17',
        awards: 'Test3|6-8 Final-Test|6-8'
      },
      {
        name: 'L. Gothira Sathnindu Mendis',
        total: 294,
        points: "244+0+50",
        grade: 9,
        userId: '090930522',
        tasks: '16',
        favourite: 'Explore',
        rank: '5',
        awards: 'Final-Test|9-11'
      },
      {
        name: 'J.A. Gamitha Kalsara Jayalath',
        total: 18,
        points: "18+0+0",
        grade: 9,
        userId: '090128142',
        tasks: '1',
        favourite: 'Code',
        rank: '29',
      },
      {
        name: 'W.D. Upek Kasun Akalanka',
        total: 36,
        points: "36+0+0",
        grade: 10,
        userId: '101136501',
        tasks: '2',
        favourite: 'Code Design',
        rank: '26'
      },
      {
        name: 'Samuditha Garusinha',
        total: 28,
        points: "28+0+0",
        grade: 9,
        userId: '091029510',
        tasks: '2',
        favourite: 'Code',
        rank: '27',
      },
      {
        name: 'M.D. Chamod Madushan Gunathilaka',
        total: 120,
        points: "0+120+0",
        grade: 10,
        userId: '1007826',
        tasks: '-',
        favourite: '---',
        rank: '17',
        awards: 'ARDOBERRY-1st'
      },
      {
        name: 'Isuka Daniru Buddima Pussewela',
        total: 20,
        points: "20+0+0",
        grade: 11,
        userId: '111116527',
        tasks: '1',
        favourite: 'Explore',
        rank: '28'
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