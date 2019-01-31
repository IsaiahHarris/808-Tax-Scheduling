const bookshelf = require('./bookshelf');

class Appointment extends bookshelf.Model {
  get tableName() {
    return 'appointments';
  }

  get hasTimestamps() {
    return false;
  }
}

module.exports = bookshelf.model('Appointment', Appointment);
