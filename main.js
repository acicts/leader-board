new Vue({
  el: '#demo',

  data: {
    sortKey: 'score',

    reverse: true,

    search: '',

    columns: ['name', 'grade', 'score','tasks', 'favourite' ],

    /*users: [
      { name: 'John', score: 50, grade: 9, userId:'asd123' },
      { name: 'Jane', score: 22, grade: 9, userId:'asd123' },
      { name: 'Paul', score: 34, grade: 9, userId:'asd123' },
      { name: 'Kate', score: 15, grade: 9, userId:'asd123' },
      { name: 'Amanda', score: 65, grade: 9, userId:'asd123' },
      { name: 'Steve', score: 38, grade: 9, userId:'asd123' },
      { name: 'Keith', score: 21, grade: 9, userId:'asd123' },
      { name: 'Don', score: 50, grade: 9, userId:'asd123' },
      { name: 'Susan', score: 21, grade: 9, userId:'asd123' }
    ]*/
    users: [
      { name: 'H. Jayasahan Hansana', score: 88, grade: 10, userId:'100135885',tasks:'6', favourite:'All Rounder'},
      { name: 'Janidu Arinda Fernando', score: 44, grade: 9, userId:'090741612',tasks:'3', favourite:'Design'},
      { name: 'Heliya Nithira Suriya Bandara', score: 44, grade: 11, userId:'111101615',tasks:'3', favourite:'Design'},
      { name: 'W.M. Janiru Damsath Bandara', score: 32, grade: 7, userId:'070839299',tasks:'2', favourite:'Code'},
      { name: 'T. Nethula Roshane Peiris', score: 44, grade: 7, userId:'070838256',tasks:'3', favourite:'Code/Design'},
      { name: 'Thulina Dinsara Perera', score: 50, grade: 9, userId:'091030109',tasks:'4', favourite:'All Rounder'},
      { name: 'H. Sithira Ransara Seneviratne', score: 12, grade: 8, userId:'080223301',tasks:'1', favourite:'Design'},
      { name: 'Senel Demintha', score: 53, grade: 11, userId:'110214810',tasks:'2', favourite:'Design/Explore'},
      { name: 'Banuja Nethusara Dehigaspage', score: 18, grade: 8, userId:'080830456',tasks:'1', favourite:'Design'},
      { name: 'Inuka Sanudaya Batawala', score: 55, grade: 7, userId:'070516651',tasks:'2', favourite:'Code/Design'},
      { name: 'J.B. Bihandu Semal', score: 45, grade: 9, userId:'091008008',tasks:'3', favourite:'Code/Design'},
      { name: 'J.A. Davindu Reshan', score: 41, grade: 11, userId:'111147704',tasks:'3', favourite:'Design'},
      { name: 'Chamod Nilushanka Perera', score: 94, grade: 11, userId:'111141143',tasks:'6', favourite:'Design/Explore'},
      { name: 'Nayantha Nethsara Senavithilaka', score: 32, grade: 10, userId:'101039302',tasks:'2', favourite:'Design'},
      { name: 'E.A. Chamuthu Megha Malhara Edirisooriya', score: 60, grade: 10, userId:'100148900',tasks:'4', favourite:'All Rounder'},
      { name: 'T. Didula Dinoj Pieris', score: 15, grade: 9, userId:'090125136',tasks:'1', favourite:'Design'},
      { name: 'R.M. Tenura Geenath', score: 15, grade: 8, userId:'080835791',tasks:'1', favourite:'Design'},
      { name: 'M.M.A. Pahan Samudika Abhayawardhane', score: 36, grade: 11, userId:'110418733',tasks:'2', favourite:'Design'},
      { name: 'K.A. Samiru Thisaraka De Silva', score: 87, grade: 11, userId:'110842334',tasks:'6', favourite:'Design'},
      { name: 'Benul Chenuka Wijwrathne', score: 41, grade: 11, userId:'110427637',tasks:'1', favourite:'Code'},
      { name: 'Senura Danitha Ratnayake', score: 25, grade: 6, userId:'061142574',tasks:'0', favourite:'---'},
      { name: 'Nithika Senaweera', score: 39, grade: 10, userId:'100520368',tasks:'3', favourite:'All Rounder'},
      { name: 'Kavindu Pabasara Panditharatne', score: 95, grade: 10, userId:'101043545',tasks:'6', favourite:'Code/Design'},
      { name: 'Osanda Samaratunge', score: 18, grade: 11, userId:'111134290',tasks:'1', favourite:'Design'},
      { name: 'S. Chandupa Yasas Silva', score: 32, grade: 10, userId:'100944124',tasks:'2', favourite:'Design'},
    ]
  },

  methods: {
    sortBy: function(sortKey) {
      this.reverse = (this.sortKey == sortKey) ? ! this.reverse : false;

      this.sortKey = sortKey;
    }
  }
});

