exports.up = function(knex, Promise) {
  return knex.schema.createTable('dates', table => {
    table.increments();
    table.string('date');
    table.string('day');
    table.string('year');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('dates');
};
