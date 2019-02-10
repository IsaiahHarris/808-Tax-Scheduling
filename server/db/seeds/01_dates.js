exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dates')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('dates').insert([
        { id: 1, date: 'March 1', day: 'Friday', year: '2019' },
        { id: 2, date: 'March 2', day: 'Saturday', year: '2019' },
        { id: 3, date: 'March 3', day: 'Sunday', year: '2019' },
        { id: 4, date: 'March 4', day: 'Monday', year: '2019' },
        { id: 5, date: 'March 5', day: 'Tuesday', year: '2019' },
        { id: 6, date: 'March 6', day: 'Wednesday', year: '2019' },
        { id: 7, date: 'March 7', day: 'Thurdsay', year: '2019' },
        { id: 8, date: 'March 8', day: 'Friday', year: '2019' },
        { id: 9, date: 'March 9', day: 'Saturday', year: '2019' },
        { id: 10, date: 'March 10', day: 'Sunday', year: '2019' },
        { id: 11, date: 'March 11', day: 'Monday', year: '2019' },
        { id: 12, date: 'March 12', day: 'Tuesday', year: '2019' },
        { id: 13, date: 'March 13', day: 'Wednesday', year: '2019' },
        { id: 14, date: 'March 14', day: 'Thursday', year: '2019' },
        { id: 15, date: 'March 15', day: 'Friday', year: '2019' },
        { id: 16, date: 'March 16', day: 'Saturday', year: '2019' },
        { id: 17, date: 'March 17', day: 'Sunday', year: '2019' },
        { id: 18, date: 'March 18', day: 'Monday', year: '2019' },
        { id: 19, date: 'March 19', day: 'Tuesday', year: '2019' },
        { id: 20, date: 'March 20', day: 'Wednesday', year: '2019' },
        { id: 21, date: 'March 21', day: 'Thursday', year: '2019' },
        { id: 22, date: 'March 22', day: 'Friday', year: '2019' },
        { id: 23, date: 'March 23', day: 'Saturday', year: '2019' },
        { id: 24, date: 'March 24', day: 'Sunday', year: '2019' },
        { id: 25, date: 'March 25', day: 'Monday', year: '2019' },
        { id: 26, date: 'March 26', day: 'Tuesday', year: '2019' },
        { id: 27, date: 'March 27', day: 'Wednesday', year: '2019' },
        { id: 28, date: 'March 28', day: 'Thursday', year: '2019' },
        { id: 29, date: 'March 29', day: 'Friday', year: '2019' },
        { id: 30, date: 'March 30', day: 'Saturday', year: '2019' },
        { id: 31, date: 'March 31', day: 'Sunday', year: '2019' }
      ]);
    });
};
