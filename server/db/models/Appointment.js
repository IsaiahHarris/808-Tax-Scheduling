const bookshelf = require('./bookshelf');

class Appointment extends bookshelf.Model {
  get tableName() {
    return 'appointments';
  }

  get hasTimestamps() {
    return false;
  }

  date() {
    return this.belongsTo('Date', 'date_id');
  }
}

module.exports = bookshelf.model('Appointment', Appointment);
