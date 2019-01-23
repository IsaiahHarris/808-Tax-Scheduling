exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('appointments')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('appointments').insert([
        {
          id: 1,
          name: 'John Doe',
          phone_number: '8085551954',
          time: '8:30',
          date: '2/12/19',
          person: 'jimmy',
          subject: 'taxes',
          note: 'wants to do taxes'
        }
      ]);
    });
};
