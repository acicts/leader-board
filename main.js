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
      { name: 'H. Jayasahan Hansana', score: 74, grade: 10, userId:'100135885',tasks:'5', favourite:'Design'},
      { name: 'Janidu Arinda Fernando', score: 30, grade: 9, userId:'090741612',tasks:'2', favourite:'Design'},
      { name: 'Heliya Nithira Suriya Bandara', score: 15, grade: 11, userId:'111101615',tasks:'1', favourite:'Design'},
      { name: 'W.M. Janiru Damsath Bandara', score: 32, grade: 7, userId:'070839299',tasks:'2', favourite:'Code'},
      { name: 'T. Nethula Roshane Peiris', score: 29, grade: 7, userId:'070838256',tasks:'2', favourite:'Design'},
      { name: 'Thulina Dinsara Perera', score: 23, grade: 9, userId:'091030109',tasks:'2', favourite:'Design'},
      { name: 'H. Sithira Ransara Seneviratne', score: 12, grade: 8, userId:'080223301',tasks:'1', favourite:'Design'},
      { name: 'Senel Demintha', score: 41, grade: 11, userId:'110214810',tasks:'1', favourite:'Design'},
      { name: 'Banuja Nethusara Dehigaspage', score: 18, grade: 8, userId:'080830456',tasks:'1', favourite:'Design'},
      { name: 'Inuka Sanudaya Batawala', score: 30, grade: 7, userId:'070516651',tasks:'2', favourite:'Code/Design'},
      { name: 'J.B. Bihandu Semal', score: 29, grade: 9, userId:'091008008',tasks:'2', favourite:'Code/Design'},
      { name: 'J.A. Davindu Reshan', score: 41, grade: 11, userId:'111147704',tasks:'3', favourite:'Design'},
      { name: 'Chamod Nilushanka Perera', score: 32, grade: 11, userId:'111141143',tasks:'2', favourite:'Design'},
      { name: 'Nayantha Nethsara Senavithilaka', score: 32, grade: 10, userId:'101039302',tasks:'2', favourite:'Design'},
      { name: 'E.A. Chamuthu Megha Malhara Edirisooriya', score: 13, grade: 10, userId:'100148900',tasks:'1', favourite:'Code'},
      { name: 'T. Didula Dinoj Pieris', score: 15, grade: 9, userId:'090125136',tasks:'1', favourite:'Design'},
      { name: 'R.M. Tenura Geenath', score: 15, grade: 8, userId:'080835791',tasks:'1', favourite:'Design'},
      { name: 'M.M.A. Pahan Samudika Abhayawardhane', score: 19, grade: 11, userId:'110418733',tasks:'1', favourite:'Design'},
      { name: 'K.A. Samiru Thisaraka De Silva', score: 17, grade: 11, userId:'110842334',tasks:'1', favourite:'Design'}
    ]
  },

  methods: {
    sortBy: function(sortKey) {
      this.reverse = (this.sortKey == sortKey) ? ! this.reverse : false;

      this.sortKey = sortKey;
    }
  }
});

