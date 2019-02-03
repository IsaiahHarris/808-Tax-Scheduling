exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dates')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('dates').insert([
        { id: 1, date: 'Feburary 20', day: 'Wednesday', year: '2019' },
        { id: 2, date: 'Feburary 21', day: 'Thursday', year: '2019' },
        { id: 3, date: 'Feburary 22', day: 'Friday', year: '2019' },
        { id: 4, date: 'Feburary 23', day: 'Saturday', year: '2019' }
      ]);
    });
};
