exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('appointments')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('appointments').insert([
        {
          id: 1,
          name: '',
          phone_number: '',
          time: '',
          date: '',
          person: '',
          subject: '',
          note: ''
        },
        {
          id: 2,
          name: '',
          phone_number: '',
          time: '',
          date: '',
          person: '',
          subject: '',
          note: ''
        },
        {
          id: 3,
          name: '',
          phone_number: '',
          time: '',
          date: '',
          person: '',
          subject: '',
          note: ''
        },
        {
          id: 4,
          name: '',
          phone_number: '',
          time: '',
          date: '',
          person: '',
          subject: '',
          note: ''
        },
        {
          id: 5,
          name: '',
          phone_number: '',
          time: '',
          date: '',
          person: '',
          subject: '',
          note: ''
        },
        {
          id: 6,
          name: '',
          phone_number: '',
          time: '',
          date: '',
          person: '',
          subject: '',
          note: ''
        },
        {
          id: 7,
          name: '',
          phone_number: '',
          time: '',
          date: '',
          person: '',
          subject: '',
          note: ''
        },
        {
          id: 8,
          name: '',
          phone_number: '',
          time: '',
          date: '',
          person: '',
          subject: '',
          note: ''
        },
        {
          id: 9,
          name: '',
          phone_number: '',
          time: '',
          date: '',
          person: '',
          subject: '',
          note: ''
        },
        {
          id: 10,
          name: '',
          phone_number: '',
          time: '',
          date: '',
          person: '',
          subject: '',
          note: ''
        },
        {
          id: 11,
          name: '',
          phone_number: '',
          time: '',
          date: '',
          person: '',
          subject: '',
          note: ''
        }
      ]);
    });
};
