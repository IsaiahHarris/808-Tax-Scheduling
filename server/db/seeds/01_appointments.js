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
        },
        {
          id: 2,
          name: 'John Doe',
          phone_number: '8085551954',
          time: '8:30',
          date: '2/13/19',
          person: 'walk-in',
          subject: 'taxes',
          note: 'wants to do taxes'
        },
        {
          id: 3,
          name: 'John Doe',
          phone_number: '8085551954',
          time: '8:30',
          date: '2/14/19',
          person: 'jimmy',
          subject: 'taxes',
          note: 'wants to do taxes'
        },
        {
          id: 4,
          name: 'John Doe',
          phone_number: '8085551954',
          time: '8:30',
          date: '3/12/19',
          person: 'walk-in',
          subject: 'taxes',
          note: 'wants to do taxes'
        },
        {
          id: 5,
          name: 'John Doe',
          phone_number: '8085551954',
          time: '8:30',
          date: '3/12/19',
          person: 'bernice',
          subject: 'taxes',
          note: 'wants to do taxes'
        }
      ]);
    });
};
