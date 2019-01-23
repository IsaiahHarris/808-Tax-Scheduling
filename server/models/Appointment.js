const bookshelf = require('./bookshelf');

class Appointment extends bookshelf.Model {
  get tableName() {
    return 'appointments';
  }

  get hasTimestamps() {
    return true;
  }
}

module.exports = bookshelf.model('Appointment', Appointment);
