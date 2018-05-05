new Vue({
  el: '#demo',

  data: {
    sortKey: 'score',

    reverse: true,

    search: '',

    columns: ['name', 'grade', 'score' ],

    newUser: {},

    users: [
      { name: 'John', score: 50, grade: 9, userId:'asd123' },
      { name: 'Jane', score: 22, grade: 9, userId:'asd123' },
      { name: 'Paul', score: 34, grade: 9, userId:'asd123' },
      { name: 'Kate', score: 15, grade: 9, userId:'asd123' },
      { name: 'Amanda', score: 65, grade: 9, userId:'asd123' },
      { name: 'Steve', score: 38, grade: 9, userId:'asd123' },
      { name: 'Keith', score: 21, grade: 9, userId:'asd123' },
      { name: 'Don', score: 50, grade: 9, userId:'asd123' },
      { name: 'Susan', score: 21, grade: 9, userId:'asd123' }
    ]
  },

  methods: {
    sortBy: function(sortKey) {
      this.reverse = (this.sortKey == sortKey) ? ! this.reverse : false;

      this.sortKey = sortKey;
    },

    addUser: function() {
      this.users.push(this.newUser);
      this.newUser = {};
    }
  }
});
