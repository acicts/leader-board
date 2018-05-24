new Vue({
  el: '#demo',

  data: {
    sortKey: 'score',

    reverse: true,

    search: '',

    columns: ['name', 'grade', 'score','tasks', 'favourite','rank','awards' ],

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
      { name: 'H. Jayasahan Hansana', score: 104, grade: 10, userId:'100135885',tasks:'7', favourite:'Design/Explore', rank:'8'},
      { name: 'Janidu Arinda Fernando', score: 95, grade: 9, userId:'090741612',tasks:'7', favourite:'Design/Explore', rank:'9'},
      { name: 'Heliya Nithira Suriya Bandara', score: 164, grade: 11, userId:'111101615',tasks:'3', favourite:'Design', rank:'5', awards:'Still Graphics 3D 10-11'},
      { name: 'W.M. Janiru Damsath Bandara', score: 32, grade: 7, userId:'070839299',tasks:'2', favourite:'Code', rank:'17'},
      { name: 'T. Nethula Roshane Peiris', score: 58, grade: 7, userId:'070838256',tasks:'4', favourite:'Code/Design', rank:'14'},
      { name: 'Thulina Dinsara Perera', score: 63, grade: 9, userId:'091030109',tasks:'5', favourite:'All Rounder', rank:'13'},
      { name: 'H. Sithira Ransara Seneviratne', score: 12, grade: 8, userId:'080223301',tasks:'1', favourite:'Design', rank:'28'},
      { name: 'Senel Demintha', score: 53, grade: 11, userId:'110214810',tasks:'2', favourite:'Design/Explore', rank:'15'},
      { name: 'Banuja Nethusara Dehigaspage', score: 18, grade: 8, userId:'080830456',tasks:'1', favourite:'Design', rank:'23'},
      { name: 'Inuka Sanudaya Batawala', score: 191, grade: 7, userId:'070516651',tasks:'3', favourite:'Code/Design', rank:'2', awards:'Still Graphics 3D 6-9'},
      { name: 'J.B. Bihandu Semal', score: 88, grade: 9, userId:'091008008',tasks:'6', favourite:'Design', rank:'11'},
      { name: 'J.A. Davindu Reshan', score: 94, grade: 11, userId:'111147704',tasks:'5', favourite:'All Rounder', rank:'10'},
      { name: 'Chamod Nilushanka Perera', score: 230, grade: 11, userId:'111141143',tasks:'7', favourite:'Design/Explore', rank:'1',awards:'Still Graphics 2D 10-11'},
      { name: 'Nayantha Nethsara Senavithilaka', score: 32, grade: 10, userId:'101039302',tasks:'2', favourite:'Design', rank:'17'},
      { name: 'E.A. Chamuthu Megha Malhara Edirisooriya', score: 141, grade: 10, userId:'100148900',tasks:'9', favourite:'All Rounder',rank:'6'},
      { name: 'T. Didula Dinoj Pieris', score: 15, grade: 9, userId:'090125136',tasks:'1', favourite:'Design', rank:'25'},
      { name: 'R.M. Tenura Geenath', score: 15, grade: 8, userId:'080835791',tasks:'1', favourite:'Design', rank:'24'},
      { name: 'M.M.A. Pahan Samudika Abhayawardhane', score: 181, grade: 11, userId:'110418733',tasks:'2', favourite:'Design', rank:'3', awards:'Motion Graphics 2D 10-11'},
      { name: 'K.A. Samiru Thisaraka De Silva', score: 87, grade: 11, userId:'110842334',tasks:'6', favourite:'Design/Explore', rank:'12'},
      { name: 'Benul Chenuka Wijwrathne', score: 177, grade: 11, userId:'110427637',tasks:'2', favourite:'Code/Design', rank:'4', awards:'Motion Grphics 3D 10-11'},
      { name: 'Senura Danitha Ratnayake', score: 25, grade: 6, userId:'061142574',tasks:'0', favourite:'---',rank:'21'},
      { name: 'Nithika Senaweera', score: 39, grade: 10, userId:'100520368',tasks:'3', favourite:'All Rounder',rank:'16'},
      { name: 'Kavindu Pabasara Panditharatne', score: 109, grade: 10, userId:'101043545',tasks:'7', favourite:'Code/Design',rank:'7'},
      { name: 'Osanda Samaratunge', score: 18, grade: 11, userId:'111134290',tasks:'1', favourite:'Design',rank:'23'},
      { name: 'S. Chandupa Yasas Silva', score: 32, grade: 10, userId:'100944124',tasks:'2', favourite:'Design',rank:'17'},
      { name: 'Dulaj Bandara Weerakoon', score: 14, grade: 11, userId:'1104107222',tasks:'1', favourite:'Code',rank:'27'},
      { name: 'K.W. Sanithu Hasmal Kudaliyana', score: 25, grade: 8, userId:'080119696',tasks:'0', favourite:'---',rank:'21'},
      { name: 'L. Gothira Sathnindu Mendis', score: 30, grade: 9, userId:'090930522',tasks:'2', favourite:'Code/Design',rank:'20'},
    ]
  },

  methods: {
    sortBy: function(sortKey) {
      this.reverse = (this.sortKey == sortKey) ? ! this.reverse : false;

      this.sortKey = sortKey;
    }
  }
});

