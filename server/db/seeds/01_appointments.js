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
          time: '1',
          date: '',
          person: 'jimmy',
          subject: '',
          note: ''
        },
        {
          id: 2,
          name: '',
          phone_number: '',
          time: '2',
          date: '',
          person: 'jimmy',
          subject: '',
          note: ''
        },
        {
          id: 3,
          name: '',
          phone_number: '',
          time: '3',
          date: '',
          person: 'jimmy',
          subject: '',
          note: ''
        },
        {
          id: 4,
          name: '',
          phone_number: '',
          time: '4',
          date: '',
          person: 'jimmy',
          subject: '',
          note: ''
        },
        {
          id: 5,
          name: '',
          phone_number: '',
          time: '5',
          date: '',
          person: 'jimmy',
          subject: '',
          note: ''
        },
        {
          id: 6,
          name: '',
          phone_number: '',
          time: '6',
          date: '',
          person: 'jimmy',
          subject: '',
          note: ''
        },
        {
          id: 7,
          name: '',
          phone_number: '',
          time: '7',
          date: '',
          person: 'jimmy',
          subject: '',
          note: ''
        },
        {
          id: 8,
          name: '',
          phone_number: '',
          time: '8',
          date: '',
          person: 'jimmy',
          subject: '',
          note: ''
        },
        {
          id: 9,
          name: '',
          phone_number: '',
          time: '9',
          date: '',
          person: 'jimmy',
          subject: '',
          note: ''
        },
        {
          id: 10,
          name: '',
          phone_number: '',
          time: '10',
          date: '',
          person: 'jimmy',
          subject: '',
          note: ''
        },
        {
          id: 11,
          name: '',
          phone_number: '',
          time: '11',
          date: '',
          person: 'jimmy',
          subject: '',
          note: ''
        },
        {
          id: 12,
          name: '',
          phone_number: '',
          time: '08',
          date: '',
          person: 'bernice',
          subject: '',
          note: ''
        },
        {
          id: 13,
          name: '',
          phone_number: '',
          time: '09',
          date: '',
          person: 'bernice',
          subject: '',
          note: ''
        },
        {
          id: 14,
          name: '',
          phone_number: '',
          time: '010',
          date: '',
          person: 'bernice',
          subject: '',
          note: ''
        },
        {
          id: 15,
          name: '',
          phone_number: '',
          time: '011',
          date: '',
          person: 'bernice',
          subject: '',
          note: ''
        },
        {
          id: 16,
          name: '',
          phone_number: '',
          time: '012',
          date: '',
          person: 'bernice',
          subject: '',
          note: ''
        },
        {
          id: 17,
          name: '',
          phone_number: '',
          time: '1',
          date: '',
          person: 'bernice',
          subject: '',
          note: ''
        },
        {
          id: 18,
          name: '',
          phone_number: '',
          time: '2',
          date: '',
          person: 'bernice',
          subject: '',
          note: ''
        },
        {
          id: 19,
          name: '',
          phone_number: '',
          time: '3',
          date: '',
          person: 'bernice',
          subject: '',
          note: ''
        },
        {
          id: 20,
          name: '',
          phone_number: '',
          time: '4',
          date: '',
          person: 'bernice',
          subject: '',
          note: ''
        },
        {
          id: 21,
          name: '',
          phone_number: '',
          time: '5',
          date: '',
          person: 'bernice',
          subject: '',
          note: ''
        },
        {
          id: 22,
          name: '',
          phone_number: '',
          time: '6',
          date: '',
          person: 'bernice',
          subject: '',
          note: ''
        },
        {
          id: 23,
          name: '',
          phone_number: '',
          time: '08',
          date: '',
          person: 'walkin',
          subject: '',
          note: ''
        },
        {
          id: 24,
          name: '',
          phone_number: '',
          time: '09',
          date: '',
          person: 'walkin',
          subject: '',
          note: ''
        },
        {
          id: 25,
          name: '',
          phone_number: '',
          time: '010',
          date: '',
          person: 'walkin',
          subject: '',
          note: ''
        },
        {
          id: 26,
          name: '',
          phone_number: '',
          time: '011',
          date: '',
          person: 'walkin',
          subject: '',
          note: ''
        },
        {
          id: 27,
          name: '',
          phone_number: '',
          time: '012',
          date: '',
          person: 'walkin',
          subject: '',
          note: ''
        },
        {
          id: 28,
          name: '',
          phone_number: '',
          time: '1',
          date: '',
          person: 'walkin',
          subject: '',
          note: ''
        },
        {
          id: 29,
          name: '',
          phone_number: '',
          time: '2',
          date: '',
          person: 'walkin',
          subject: '',
          note: ''
        },
        {
          id: 30,
          name: '',
          phone_number: '',
          time: '3',
          date: '',
          person: 'walkin',
          subject: '',
          note: ''
        },
        {
          id: 31,
          name: '',
          phone_number: '',
          time: '4',
          date: '',
          person: 'walkin',
          subject: '',
          note: ''
        },
        {
          id: 32,
          name: '',
          phone_number: '',
          time: '5',
          date: '',
          person: 'walkin',
          subject: '',
          note: ''
        },
        {
          id: 33,
          name: '',
          phone_number: '',
          time: '6',
          date: '',
          person: 'walkin',
          subject: '',
          note: ''
        }
      ]);
    });
};
