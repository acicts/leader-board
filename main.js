new Vue({
  el: '#demo',

  data: {
    sortKey: 'total',

    reverse: true,

    search: '',

    columns: ['name', 'grade', 'total', 'points', 'tasks', 'favourite', 'rank', 'awards' ],

    users: [
      { name: 'H. Jayasahan Hansana', total: 104, grade: 10, userId:'100135885',tasks:'7', favourite:'Design', rank:'10'},
      { name: 'Janidu Arinda Fernando', total: 124, grade: 9, userId:'090741612',tasks:'9', favourite:'Design/Explore', rank:'7'},
      { name: 'Heliya Nithira Suriya Bandara', total: 222, grade: 11, userId:'111101615',tasks:'5', favourite:'Design', rank:'4', awards:'Still_Graphics_3D_10-11 Test_4_9-11'},
      { name: 'W.M. Janiru Damsath Bandara', total: 57, grade: 7, userId:'070839299',tasks:'2', favourite:'Code', rank:'17',awards:'Test_4_6-8'},
      { name: 'T. Nethula Roshane Peiris', total: 96, grade: 7, userId:'070838256',tasks:'5', favourite:'All Rounder', rank:'11',awards:'Test_4_6-8'},
      { name: 'Thulina Dinsara Perera', total: 63, grade: 9, userId:'091030109',tasks:'5', favourite:'All Rounder', rank:'16'},
      { name: 'H. Sithira Ransara Seneviratne', total: 12, grade: 8, userId:'080223301',tasks:'1', favourite:'Design', rank:'28'},
      { name: 'Senel Demintha', total: 53, grade: 11, userId:'110214810',tasks:'2', favourite:'Design/Explore', rank:'18', awards:'Test_1'},
      { name: 'Banuja Nethusara Dehigaspage', total: 18, grade: 8, userId:'080830456',tasks:'1', favourite:'Design', rank:'23'},
      { name: 'Inuka Sanudaya Batawala', total: 282, grade: 7, userId:'070516651',tasks:'7', favourite:'All Rounder', rank:'1', awards:'Still_Graphics_3D_6-9 Test_2_6-8 Test_4_6-8'},
      { name: 'J.B. Bihandu Semal', total: 106, grade: 9, userId:'091008008',tasks:'7', favourite:'Design', rank:'9'},
      { name: 'J.A. Davindu Reshan', total: 94, grade: 11, userId:'111147704',tasks:'5', favourite:'Design', rank:'12',awards:'Test_3_9-11'},
      { name: 'Chamod Nilushanka Perera', total: 271, grade: 11, userId:'111141143',tasks:'8', favourite:'Design', rank:'2',awards:'Still_Graphics_2D_10-11 Test_4_9-11'},
      { name: 'Nayantha Nethsara Senavithilaka', total: 32, grade: 10, userId:'101039302',tasks:'2', favourite:'Design', rank:'20'},
      { name: 'E.A. Chamuthu Megha Malhara Edirisooriya', total: 157, grade: 10, userId:'100148900',tasks:'10', favourite:'Design',rank:'6'},
      { name: 'T. Didula Dinoj Pieris', total: 15, grade: 9, userId:'090125136',tasks:'1', favourite:'Design', rank:'25'},
      { name: 'R.M. Tenura Geenath', total: 15, grade: 8, userId:'080835791',tasks:'1', favourite:'Design', rank:'25'},
      { name: 'M.M.A. Pahan Samudika Abhayawardhane', total: 200, grade: 11, userId:'110418733',tasks:'3', favourite:'Design', rank:'5', awards:'Motion_Graphics_2D_10-11 Test_3_9-11'},
      { name: 'K.A. Samiru Thisaraka De Silva', total: 87, grade: 11, userId:'110842334',tasks:'6', favourite:'Design', rank:'13'},
      { name: 'Benul Chenuka Wijwrathne', total: 234, grade: 11, userId:'110427637',tasks:'4', favourite:'Code/Design', rank:'3', awards:'Motion_Grphics_3D_10-11 Test_2_9-11 Test_4_9-11'},
      { name: 'Senura Danitha Ratnayake', total: 25, grade: 6, userId:'061142574',tasks:'0', favourite:'---',rank:'21', awards:'Test_2_6-8'},
      { name: 'Nithika Senaweera', total: 67, grade: 10, userId:'100520368',tasks:'5', favourite:'All Rounder',rank:'15'},
      { name: 'Kavindu Pabasara Panditharatne', total: 109, grade: 10, userId:'101043545',tasks:'7', favourite:'Design',rank:'8'},
      { name: 'Osanda Samaratunge', total: 18, grade: 11, userId:'111134290',tasks:'1', favourite:'Design',rank:'23'},
      { name: 'S. Chandupa Yasas Silva', total: 49, grade: 10, userId:'100944124',tasks:'3', favourite:'Code/Design',rank:'19'},
      { name: 'Dulaj Bandara Weerakoon', total: 14, grade: 11, userId:'1104107222',tasks:'1', favourite:'Code',rank:'27'},
      { name: 'K.W. Sanithu Hasmal Kudaliyana', total: 25, grade: 8, userId:'080119696',tasks:'0', favourite:'---',rank:'21', awards:'Test_3_6-8'},
      { name: 'L. Gothira Sathnindu Mendis', total: 73, grade: 9, userId:'090930522',tasks:'5', favourite:'Design',rank:'14'},
    ]
  },

  methods: {
    sortBy: function(sortKey) {
      this.reverse = (this.sortKey == sortKey) ? ! this.reverse : false;

      this.sortKey = sortKey;
    }
  }
});

