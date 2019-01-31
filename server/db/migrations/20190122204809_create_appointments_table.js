exports.up = function(knex, Promise) {
  return knex.schema.createTable('appointments', table => {
    table.increments();
    table.string('name');
    table.string('phone_number');
    table.string('time');
    table.string('date');
    table.string('person');
    table.string('subject');
    table.string('note');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('appointments');
};
